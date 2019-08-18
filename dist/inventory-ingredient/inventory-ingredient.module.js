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
const inventory_ingredient_entity_1 = require("./inventory-ingredient.entity");
const inventory_ingredient_controller_1 = require("./inventory-ingredient.controller");
const inventory_ingredient_service_1 = require("./inventory-ingredient.service");
let InventoryIngredientModule = class InventoryIngredientModule {
};
InventoryIngredientModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([inventory_ingredient_entity_1.InventoryIngredient])],
        controllers: [inventory_ingredient_controller_1.InventoryIngredientController],
        providers: [inventory_ingredient_service_1.InventoryIngredientService],
    })
], InventoryIngredientModule);
exports.InventoryIngredientModule = InventoryIngredientModule;
//# sourceMappingURL=inventory-ingredient.module.js.map