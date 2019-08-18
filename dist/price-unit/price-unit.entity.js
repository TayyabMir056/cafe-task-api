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
const IntermediateIngredient_entity_1 = require("../IntermediateIngredient/IntermediateIngredient.entity");
const inventory_ingredient_entity_1 = require("../inventory-ingredient/inventory-ingredient.entity");
let PriceUnit = class PriceUnit {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], PriceUnit.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        name: 'name',
    }),
    __metadata("design:type", String)
], PriceUnit.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => IntermediateIngredient_entity_1.IntermediateIngredient, intermediateIngredient => intermediateIngredient.priceUnit),
    __metadata("design:type", Array)
], PriceUnit.prototype, "intermediateIngredients", void 0);
__decorate([
    typeorm_1.OneToMany(type => inventory_ingredient_entity_1.InventoryIngredient, inventoryIngredient => inventoryIngredient.priceUnit),
    __metadata("design:type", Array)
], PriceUnit.prototype, "inventoryIngredients", void 0);
PriceUnit = __decorate([
    typeorm_1.Entity('PriceUnit', { schema: 'public' })
], PriceUnit);
exports.PriceUnit = PriceUnit;
//# sourceMappingURL=price-unit.entity.js.map