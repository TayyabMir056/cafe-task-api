"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const menu_item_recipe_entity_1 = require("./menu-item-recipe.entity");
const menu_item_entity_1 = require("../menu-item/menu-item.entity");
let MenuItemRecipeService = class MenuItemRecipeService {
    constructor(menuItemRecipeRepository, menuItemRepository) {
        this.menuItemRecipeRepository = menuItemRecipeRepository;
        this.menuItemRepository = menuItemRepository;
    }
    async getAll() {
        return await this.menuItemRecipeRepository.find({
            relations: ['menuItem', 'intermediateIngredient', 'inventoryIngredient'],
        });
    }
    async readById(menuItem) {
        let menuItemRecipe = await this.menuItemRecipeRepository.find({
            join: {
                alias: 'menuItemRecipe',
                leftJoinAndSelect: {
                    MenuItem: 'menuItemRecipe.menuItem',
                    IntermediateIngredient: 'menuItemRecipe.intermediateIngredient',
                    InventoryIngredient: 'menuItemRecipe.inventoryIngredient',
                },
            },
            where: { menuItem: menuItem },
        });
        let recipe = [];
        menuItemRecipe.forEach(recipeItem => {
            recipe.push({
                ingredient: recipeItem.ingredientType == 2
                    ? recipeItem.intermediateIngredient.id
                    : recipeItem.inventoryIngredient.id,
                ingredientName: recipeItem.ingredientType == 1
                    ? recipeItem.inventoryIngredient.name
                    : recipeItem.intermediateIngredient.name,
                ingredientType: recipeItem.ingredientType == 1
                    ? 'Inventory Ingredient'
                    : 'Intermediate Ingredient',
                quantity: recipeItem.quantity,
                ingredientCost: recipeItem.ingredientType == 1
                    ? recipeItem.inventoryIngredient.cost
                    : recipeItem.intermediateIngredient.cost,
            });
        });
        return {
            menuItem: menuItem,
            recipe: recipe,
        };
    }
    async createMenuItemRecipe(data) {
        return await this.updateMenuItemRecipe(data);
    }
    async updateMenuItemRecipe(data) {
        await data.recipe.forEach(async (ingredient) => {
            let existingRecipe = await this.menuItemRecipeRepository.findOne({
                menuItem: data.menuItem,
                intermediateIngredient: ingredient.intermediateIngredient,
                inventoryIngredient: ingredient.inventoryIngredient,
                ingredientType: ingredient.ingredientType,
            });
            console.log(existingRecipe);
            if (existingRecipe) {
                await this.menuItemRecipeRepository.update({
                    menuItem: data.menuItem,
                    intermediateIngredient: ingredient.intermediateIngredient,
                    inventoryIngredient: ingredient.inventoryIngredient,
                    ingredientType: ingredient.ingredientType,
                }, {
                    quantity: ingredient.quantity,
                });
            }
            else {
                let menuItemRecipe = this.menuItemRecipeRepository.create({
                    menuItem: data.menuItem,
                    intermediateIngredient: ingredient.intermediateIngredient,
                    inventoryIngredient: ingredient.inventoryIngredient,
                    ingredientType: ingredient.ingredientType,
                    quantity: ingredient.quantity,
                });
                await this.menuItemRecipeRepository.save(menuItemRecipe);
            }
        });
        this.updateMenuItemCost(data.menuItem);
        return this.readById(data.menuItem);
    }
    async delete(id) {
        await this.menuItemRecipeRepository.delete({ id });
        return { deleted: true };
    }
    async updateMenuItemCost(menuItem) {
        let recipe = await this.readById(menuItem);
        console.log('Updating cost...');
        console.log(recipe);
        let cost = 0;
        await recipe.recipe.forEach(recipeItem => {
            cost = cost + recipeItem['ingredientCost'] * recipeItem['quantity'];
        });
        await this.menuItemRepository.update(menuItem, { cost });
    }
};
MenuItemRecipeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(menu_item_recipe_entity_1.MenuItemRecipe)),
    __param(1, typeorm_2.InjectRepository(menu_item_entity_1.MenuItem)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], MenuItemRecipeService);
exports.MenuItemRecipeService = MenuItemRecipeService;
//# sourceMappingURL=menu-item-recipe.service.js.map