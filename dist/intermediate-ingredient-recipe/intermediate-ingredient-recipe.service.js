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
let IntermediateIngredientRecipeService = class IntermediateIngredientRecipeService {
    constructor(intermediateIngredientRecipeRespository) {
        this.intermediateIngredientRecipeRespository = intermediateIngredientRecipeRespository;
    }
    async getAll() {
        return await this.intermediateIngredientRecipeRespository.find({
            relations: ['intermediateIngredient', 'inventoryIngredient'],
        });
    }
    async getRecipeByIntermediateIngredient(intermediateIngredient) {
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
        let recipe = [];
        await intermediateIngredientRecipe.forEach(recipeItem => {
            recipe.push({
                inventoryIngredient: recipeItem.inventoryIngredient.id,
                inventoryIngredient_name: recipeItem.inventoryIngredient.name,
                quantity: recipeItem.quantity,
            });
        });
        console.log(recipe);
        return {
            intermediateIngredient: intermediateIngredient.id,
            recipe: recipe,
        };
    }
    async createRecipeForIntermediateIngredient(intermediateIngredientRecipe) {
        intermediateIngredientRecipe.inventoryIngredientQuantities.forEach(inventoryItemQuantity => {
            let data = {
                intermediateIngredient: intermediateIngredientRecipe.intermediateIngredient,
                inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
                quantity: inventoryItemQuantity.quantity,
            };
            var itermediateIngredientRecipeItem = this.intermediateIngredientRecipeRespository.create(data);
            this.intermediateIngredientRecipeRespository.save(itermediateIngredientRecipeItem);
        });
        return {
            recipeAddedForId: intermediateIngredientRecipe.intermediateIngredient,
        };
    }
    async updateIntermediateIngredientRecipe(intermediateIngredient_id, data) {
        data.inventoryIngredientQuantities.forEach(inventoryItemQuantity => {
            this.intermediateIngredientRecipeRespository.update({
                intermediateIngredient: { id: intermediateIngredient_id },
                inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
            }, { quantity: inventoryItemQuantity.quantity });
        });
        return this.getRecipeByIntermediateIngredient(data.intermediateIngredient);
    }
    async deleteIntermediateIngredientRecipe(id) {
        await this.intermediateIngredientRecipeRespository.delete({
            id,
        });
        return { deleted: true };
    }
};
IntermediateIngredientRecipeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(intermediate_ingredient_recipe_entity_1.IntermediateIngredientRecipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IntermediateIngredientRecipeService);
exports.IntermediateIngredientRecipeService = IntermediateIngredientRecipeService;
//# sourceMappingURL=intermediate-ingredient-recipe.service.js.map