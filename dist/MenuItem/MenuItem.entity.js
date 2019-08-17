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
const menu_item_category_entity_1 = require("../menu-item-category/menu-item-category.entity");
const MenuItemRecipe_entity_1 = require("../MenuItemRecipe/MenuItemRecipe.entity");
let MenuItem = class MenuItem {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], MenuItem.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        unique: true,
        name: 'name',
    }),
    __metadata("design:type", String)
], MenuItem.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => menu_item_category_entity_1.MenuItemCategory, menuItemCategory => menuItemCategory.menuItems, { nullable: false }),
    typeorm_1.JoinColumn({ name: 'category' }),
    __metadata("design:type", menu_item_category_entity_1.MenuItemCategory)
], MenuItem.prototype, "category", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        precision: 53,
        name: 'sellingPrice',
    }),
    __metadata("design:type", Number)
], MenuItem.prototype, "sellingPrice", void 0);
__decorate([
    typeorm_1.Column('double precision', {
        nullable: false,
        precision: 53,
        name: 'cost',
    }),
    __metadata("design:type", Number)
], MenuItem.prototype, "cost", void 0);
__decorate([
    typeorm_1.OneToMany(type => MenuItemRecipe_entity_1.MenuItemRecipe, menuItemRecipe => menuItemRecipe.menuItem),
    __metadata("design:type", Array)
], MenuItem.prototype, "menuItemRecipes", void 0);
MenuItem = __decorate([
    typeorm_1.Entity('MenuItem', { schema: 'public' }),
    typeorm_1.Index('unique_menu_item', ['name'], { unique: true })
], MenuItem);
exports.MenuItem = MenuItem;
//# sourceMappingURL=MenuItem.entity.js.map