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
const typeorm_1 = require("@nestjs/typeorm");
const intermediate_ingredient_recipe_entity_1 = require("./intermediate-ingredient-recipe.entity");
const typeorm_2 = require("typeorm");
const inventory_ingredient_entity_1 = require("../inventory-ingredient/inventory-ingredient.entity");
const intermediate_ingredient_entity_1 = require("../intermediate-ingredient/intermediate-ingredient.entity");
let IntermediateIngredientRecipeService = class IntermediateIngredientRecipeService {
    constructor(intermediateIngredientRecipeRespository, intermediateIngredientRespository, inventoryIngredientRepository) {
        this.intermediateIngredientRecipeRespository = intermediateIngredientRecipeRespository;
        this.intermediateIngredientRespository = intermediateIngredientRespository;
        this.inventoryIngredientRepository = inventoryIngredientRepository;
    }
    async getAll() {
        const intermediateIngRecipe = await this.intermediateIngredientRecipeRespository.find({
            relations: ['intermediateIngredient', 'inventoryIngredient'],
        });
        if (!intermediateIngRecipe.length) {
            throw new common_1.HttpException('no recipe found', common_1.HttpStatus.NOT_FOUND);
        }
        return intermediateIngRecipe;
    }
    async getRecipeByIntermediateIngredient(intermediateIngredient) {
        const intermediateIngredientExists = await this.intermediateIngredientRespository.findOne({ id: intermediateIngredient.id });
        if (!intermediateIngredientExists) {
            throw new common_1.HttpException('intermediate ingredient not found', common_1.HttpStatus.NOT_FOUND);
        }
        let intermediateIngredientRecipe = await this.intermediateIngredientRecipeRespository.find({
            join: {
                alias: 'intermediateIngredientRecipe',
                leftJoinAndSelect: {
                    InventoryIngredient: 'intermediateIngredientRecipe.inventoryIngredient',
                    IntermediateIngredient: 'intermediateIngredientRecipe.intermediateIngredient',
                },
            },
            where: { intermediateIngredient: intermediateIngredient },
        });
        if (!intermediateIngredientRecipe) {
            throw new common_1.HttpException('Recipe not found', common_1.HttpStatus.NOT_FOUND);
        }
        let recipe = [];
        await intermediateIngredientRecipe.forEach(recipeItem => {
            recipe.push({
                id: recipeItem.id,
                inventoryIngredient: recipeItem.inventoryIngredient.id,
                inventoryIngredient_name: recipeItem.inventoryIngredient.name,
                inventoryIngredient_cost: recipeItem.inventoryIngredient.cost,
                quantity: recipeItem.quantity,
            });
        });
        return {
            intermediateIngredient: intermediateIngredient.id,
            recipe: recipe,
        };
    }
    async createRecipeForIntermediateIngredient(intermediateIngredientRecipe) {
        const intermediateIngredienExists = await this.intermediateIngredientRespository.findOne({ id: intermediateIngredientRecipe.intermediateIngredient.id });
        if (!intermediateIngredienExists) {
            throw new common_1.HttpException('intermediate ingredient does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        intermediateIngredientRecipe.recipe.forEach(inventoryItemQuantity => {
            let data = {
                intermediateIngredient: intermediateIngredientRecipe.intermediateIngredient,
                inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
                quantity: inventoryItemQuantity.quantity,
            };
            var itermediateIngredientRecipeItem = this.intermediateIngredientRecipeRespository.create(data);
            this.intermediateIngredientRecipeRespository.save(itermediateIngredientRecipeItem);
        });
        this.updateIntermediateIngredientCost(intermediateIngredientRecipe.intermediateIngredient);
        return {
            recipeAddedForId: intermediateIngredientRecipe.intermediateIngredient,
        };
    }
    async updateIntermediateIngredientRecipe(intermediateIngredient_id, data) {
        const intermediateIngredientExists = this.intermediateIngredientRespository.findOne({ id: intermediateIngredient_id });
        if (!intermediateIngredientExists) {
            throw new common_1.HttpException('intermediate ingredient does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        data.recipe.forEach(async (inventoryItemQuantity) => {
            const inventoryIngredientExists = await this.inventoryIngredientRepository.findOne({ id: inventoryItemQuantity.inventoryIngredient.id });
            if (inventoryIngredientExists) {
                const inventoryItemExistsInRecipe = await this.intermediateIngredientRecipeRespository.findOne({
                    intermediateIngredient: data.intermediateIngredient,
                    inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
                });
                if (inventoryItemExistsInRecipe) {
                    this.intermediateIngredientRecipeRespository.update({
                        intermediateIngredient: { id: intermediateIngredient_id },
                        inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
                    }, { quantity: inventoryItemQuantity.quantity });
                }
                else {
                    let createData = {
                        intermediateIngredient: data.intermediateIngredient,
                        inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
                        quantity: inventoryItemQuantity.quantity,
                    };
                    var itermediateIngredientRecipeItem = this.intermediateIngredientRecipeRespository.create(createData);
                    this.intermediateIngredientRecipeRespository.save(itermediateIngredientRecipeItem);
                }
            }
        });
        await this.updateIntermediateIngredientCost(data.intermediateIngredient);
        return await this.getRecipeByIntermediateIngredient(data.intermediateIngredient);
    }
    async deleteIntermediateIngredientRecipe(id) {
        const intermediateIngRecipe = await this.intermediateIngredientRecipeRespository.findOne({ id });
        await console.log('intermediateIngRecipe:', intermediateIngRecipe);
        if (!intermediateIngRecipe) {
            throw new common_1.HttpException('item id not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.intermediateIngredientRecipeRespository.delete({
            id,
        });
        await this.updateIntermediateIngredientCost(intermediateIngRecipe.intermediateIngredient);
        return { deleted: true };
    }
    async updateIntermediateIngredientCost(intermediateIngredient) {
        let recipe = await this.getRecipeByIntermediateIngredient(intermediateIngredient);
        let cost = 0;
        await recipe.recipe.forEach(recipeItem => {
            cost =
                cost + recipeItem['inventoryIngredient_cost'] * recipeItem['quantity'];
        });
        this.intermediateIngredientRespository.update(intermediateIngredient, {
            cost,
        });
        return { updated: intermediateIngredient.id };
    }
};
IntermediateIngredientRecipeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(intermediate_ingredient_recipe_entity_1.IntermediateIngredientRecipe)),
    __param(1, typeorm_1.InjectRepository(intermediate_ingredient_entity_1.IntermediateIngredient)),
    __param(2, typeorm_1.InjectRepository(inventory_ingredient_entity_1.InventoryIngredient)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], IntermediateIngredientRecipeService);
exports.IntermediateIngredientRecipeService = IntermediateIngredientRecipeService;
//# sourceMappingURL=intermediate-ingredient-recipe.service.js.map