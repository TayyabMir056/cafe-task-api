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
const typeorm_2 = require("typeorm");
const menu_item_category_entity_1 = require("./menu-item-category.entity");
let MenuItemCategoryService = class MenuItemCategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async showAll() {
        return await this.categoryRepository.find();
    }
    async create(data) {
        const menuItemCategory = await this.categoryRepository.create(data);
        await this.categoryRepository.save(menuItemCategory);
        return data;
    }
    async read(id) {
        return await this.categoryRepository.findOne(id);
    }
    async update(id, data) {
        await this.categoryRepository.update(id, data);
        return await this.categoryRepository.findOne(id);
    }
    async destroy(id) {
        await this.categoryRepository.delete(id);
        return { deleted: true };
    }
};
MenuItemCategoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(menu_item_category_entity_1.MenuItemCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuItemCategoryService);
exports.MenuItemCategoryService = MenuItemCategoryService;
//# sourceMappingURL=menu-item-category.service.js.map