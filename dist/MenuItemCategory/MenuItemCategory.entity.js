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
const MenuItem_entity_1 = require("../MenuItem/MenuItem.entity");
let MenuItemCategory = class MenuItemCategory {
};
__decorate([
    typeorm_1.Column('uuid', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", String)
], MenuItemCategory.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        unique: true,
        length: 20,
        name: 'name',
    }),
    __metadata("design:type", String)
], MenuItemCategory.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(type => MenuItem_entity_1.MenuItem, menuItem => menuItem.category),
    __metadata("design:type", Array)
], MenuItemCategory.prototype, "menuItems", void 0);
MenuItemCategory = __decorate([
    typeorm_1.Entity('MenuItemCategory', { schema: 'public' }),
    typeorm_1.Index('unique_category', ['name'], { unique: true })
], MenuItemCategory);
exports.MenuItemCategory = MenuItemCategory;
//# sourceMappingURL=MenuItemCategory.entity.js.map