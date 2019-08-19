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
Object.defineProperty(exports, "__esModule", { value: true });
const intermediate_ingredient_entity_1 = require("../intermediate-ingredient/intermediate-ingredient.entity");
const inventory_ingredient_entity_1 = require("../inventory-ingredient/inventory-ingredient.entity");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class InventoryItemQuantityDTO {
}
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => inventory_ingredient_entity_1.InventoryIngredient),
    __metadata("design:type", inventory_ingredient_entity_1.InventoryIngredient)
], InventoryItemQuantityDTO.prototype, "inventoryIngredient", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], InventoryItemQuantityDTO.prototype, "quantity", void 0);
class IntermediateIngredientRecipeDTO {
}
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => intermediate_ingredient_entity_1.IntermediateIngredient),
    __metadata("design:type", intermediate_ingredient_entity_1.IntermediateIngredient)
], IntermediateIngredientRecipeDTO.prototype, "intermediateIngredient", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => InventoryItemQuantityDTO),
    __metadata("design:type", Array)
], IntermediateIngredientRecipeDTO.prototype, "inventoryIngredientQuantities", void 0);
exports.IntermediateIngredientRecipeDTO = IntermediateIngredientRecipeDTO;
//# sourceMappingURL=intermediate-ingredient-recipe.dto.js.map