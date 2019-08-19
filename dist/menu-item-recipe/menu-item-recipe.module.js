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
const menu_item_recipe_controller_1 = require("./menu-item-recipe.controller");
const menu_item_recipe_service_1 = require("./menu-item-recipe.service");
const menu_item_recipe_entity_1 = require("./menu-item-recipe.entity");
const menu_item_entity_1 = require("../menu-item/menu-item.entity");
let MenuItemRecipeModule = class MenuItemRecipeModule {
};
MenuItemRecipeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([menu_item_recipe_entity_1.MenuItemRecipe, menu_item_entity_1.MenuItem])],
        controllers: [menu_item_recipe_controller_1.MenuItemRecipeController],
        providers: [menu_item_recipe_service_1.MenuItemRecipeService],
    })
], MenuItemRecipeModule);
exports.MenuItemRecipeModule = MenuItemRecipeModule;
//# sourceMappingURL=menu-item-recipe.module.js.map