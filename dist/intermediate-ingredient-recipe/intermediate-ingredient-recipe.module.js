"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const intermediate_ingredient_recipe_entity_1 = require("./intermediate-ingredient-recipe.entity");
const intermediate_ingredient_entity_1 = require("../intermediate-ingredient/intermediate-ingredient.entity");
const intermediate_ingredient_recipe_controller_1 = require("./intermediate-ingredient-recipe.controller");
const intermediate_ingredient_recipe_service_1 = require("./intermediate-ingredient-recipe.service");
let IntermediateIngredientRecipeModule = class IntermediateIngredientRecipeModule {
};
IntermediateIngredientRecipeModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                intermediate_ingredient_recipe_entity_1.IntermediateIngredientRecipe,
                intermediate_ingredient_entity_1.IntermediateIngredient,
            ]),
        ],
        controllers: [intermediate_ingredient_recipe_controller_1.IntermediateIngredientRecipeController],
        providers: [intermediate_ingredient_recipe_service_1.IntermediateIngredientRecipeService],
    })
], IntermediateIngredientRecipeModule);
exports.IntermediateIngredientRecipeModule = IntermediateIngredientRecipeModule;
//# sourceMappingURL=intermediate-ingredient-recipe.module.js.map