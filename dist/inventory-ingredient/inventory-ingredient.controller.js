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
const inventory_ingredient_service_1 = require("./inventory-ingredient.service");
const validation_pipe_1 = require("../shared/validation.pipe");
let InventoryIngredientController = class InventoryIngredientController {
    constructor(inventoryIngredientService) {
        this.inventoryIngredientService = inventoryIngredientService;
    }
    getAllIngredients() {
        return this.inventoryIngredientService.showAll();
    }
    gerIngredientById(id) {
        return this.inventoryIngredientService.read(id);
    }
    addIngredient(data) {
        return this.inventoryIngredientService.create(data);
    }
    updateIngredient(id, data) {
        return this.inventoryIngredientService.update(id, data);
    }
    deleteIngredient(id) {
        return this.inventoryIngredientService.destroy(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InventoryIngredientController.prototype, "getAllIngredients", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryIngredientController.prototype, "gerIngredientById", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InventoryIngredientController.prototype, "addIngredient", null);
__decorate([
    common_1.Put(':id'),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], InventoryIngredientController.prototype, "updateIngredient", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryIngredientController.prototype, "deleteIngredient", null);
InventoryIngredientController = __decorate([
    common_1.Controller('inventory_ing'),
    __metadata("design:paramtypes", [inventory_ingredient_service_1.InventoryIngredientService])
], InventoryIngredientController);
exports.InventoryIngredientController = InventoryIngredientController;
//# sourceMappingURL=inventory-ingredient.controller.js.map