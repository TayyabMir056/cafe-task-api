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
const MenuItem_1 = require("../MenuItem/MenuItem");
const InventoryIngredient_1 = require("../InventoryIngredient/InventoryIngredient");
const IntermediateIngredient_1 = require("../IntermediateIngredient/IntermediateIngredient");
let MenuItemRecipe = class MenuItemRecipe {
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", String)
], MenuItemRecipe.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => MenuItem_1.MenuItem, menuItem => menuItem.menuItemRecipes, {
        nullable: false,
    }),
    typeorm_1.JoinColumn({ name: 'menuItem_id' }),
    __metadata("design:type", MenuItem_1.MenuItem)
], MenuItemRecipe.prototype, "menuItem", void 0);
__decorate([
    typeorm_1.ManyToOne(type => InventoryIngredient_1.InventoryIngredient, inventoryIngredient => inventoryIngredient.menuItemRecipes, {}),
    typeorm_1.JoinColumn({ name: 'inventoryIngredient_id' }),
    __metadata("design:type", InventoryIngredient_1.InventoryIngredient)
], MenuItemRecipe.prototype, "inventoryIngredient", void 0);
__decorate([
    typeorm_1.ManyToOne(type => IntermediateIngredient_1.IntermediateIngredient, intermediateIngredient => intermediateIngredient.menuItemRecipes, {}),
    typeorm_1.JoinColumn({ name: 'intermediateIngredient_id' }),
    __metadata("design:type", IntermediateIngredient_1.IntermediateIngredient)
], MenuItemRecipe.prototype, "intermediateIngredient", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        precision: 53,
        name: 'quantity',
    }),
    __metadata("design:type", Number)
], MenuItemRecipe.prototype, "quantity", void 0);
MenuItemRecipe = __decorate([
    typeorm_1.Entity('MenuItemRecipe', { schema: 'public' })
], MenuItemRecipe);
exports.MenuItemRecipe = MenuItemRecipe;
//# sourceMappingURL=MenuItemRecipe.js.map