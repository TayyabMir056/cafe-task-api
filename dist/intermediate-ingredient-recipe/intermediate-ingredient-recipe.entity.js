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
const typeorm_1 = require("typeorm");
const intermediate_ingredient_entity_1 = require("../intermediate-ingredient/intermediate-ingredient.entity");
const inventory_ingredient_entity_1 = require("../inventory-ingredient/inventory-ingredient.entity");
let IntermediateIngredientRecipe = class IntermediateIngredientRecipe {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], IntermediateIngredientRecipe.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => intermediate_ingredient_entity_1.IntermediateIngredient, intermediateIngredient => intermediateIngredient.intermediateIngredientRecipes, { nullable: false }),
    typeorm_1.JoinColumn({ name: 'intermediateIngredient_id' }),
    __metadata("design:type", intermediate_ingredient_entity_1.IntermediateIngredient)
], IntermediateIngredientRecipe.prototype, "intermediateIngredient", void 0);
__decorate([
    typeorm_1.ManyToOne(type => inventory_ingredient_entity_1.InventoryIngredient, inventoryIngredient => inventoryIngredient.intermediateIngredientRecipes, { nullable: false }),
    typeorm_1.JoinColumn({ name: 'inventoryIngredient_id' }),
    __metadata("design:type", inventory_ingredient_entity_1.InventoryIngredient)
], IntermediateIngredientRecipe.prototype, "inventoryIngredient", void 0);
__decorate([
    typeorm_1.Column('decimal', {
        nullable: false,
        name: 'quantity',
    }),
    __metadata("design:type", Number)
], IntermediateIngredientRecipe.prototype, "quantity", void 0);
IntermediateIngredientRecipe = __decorate([
    typeorm_1.Entity('IntermediateIngredientRecipe', { schema: 'public' }),
    typeorm_1.Unique(['intermediateIngredient', 'inventoryIngredient'])
], IntermediateIngredientRecipe);
exports.IntermediateIngredientRecipe = IntermediateIngredientRecipe;
//# sourceMappingURL=intermediate-ingredient-recipe.entity.js.map