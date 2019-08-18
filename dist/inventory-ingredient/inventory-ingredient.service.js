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
const inventory_ingredient_entity_1 = require("./inventory-ingredient.entity");
const typeorm_2 = require("typeorm");
let InventoryIngredientService = class InventoryIngredientService {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    async showAll() {
        return await this.inventoryRepository.find();
    }
    async create(data) {
        const inventoryIngredient = this.inventoryRepository.create(data);
        await this.inventoryRepository.save(inventoryIngredient);
        return inventoryIngredient;
    }
    async read(id) {
        return await this.inventoryRepository.findOne({ id });
    }
    async update(id, data) {
        await this.inventoryRepository.update({ id }, data);
        return await this.inventoryRepository.findOne({ id });
    }
    async destroy(id) {
        await this.inventoryRepository.delete({ id });
        return { deleted: true };
    }
};
InventoryIngredientService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(inventory_ingredient_entity_1.InventoryIngredient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InventoryIngredientService);
exports.InventoryIngredientService = InventoryIngredientService;
//# sourceMappingURL=inventory-ingredient.service.js.map