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
const menu_item_entity_1 = require("./menu-item.entity");
const typeorm_2 = require("typeorm");
let MenuItemService = class MenuItemService {
    constructor(menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    async showAll() {
        return await this.menuItemRepository.find({ relations: ['category'] });
    }
    async read(id) {
        return await this.menuItemRepository.findOne({ id }, { relations: ['category'] });
    }
    async create(data) {
        const menuItem = this.menuItemRepository.create(data);
        await this.menuItemRepository.save(menuItem);
        return menuItem;
    }
    async update(id, data) {
        await this.menuItemRepository.update({ id }, data);
        return this.menuItemRepository.findOne({ id });
    }
    async delete(id) {
        await this.menuItemRepository.delete({ id });
        return { delete: true };
    }
};
MenuItemService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(menu_item_entity_1.MenuItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MenuItemService);
exports.MenuItemService = MenuItemService;
//# sourceMappingURL=menu-item.service.js.map