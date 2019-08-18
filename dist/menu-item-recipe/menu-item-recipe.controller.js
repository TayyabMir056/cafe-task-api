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
const menu_item_recipe_service_1 = require("./menu-item-recipe.service");
let MenuItemRecipeController = class MenuItemRecipeController {
    constructor(menuItemRecipeService) {
        this.menuItemRecipeService = menuItemRecipeService;
    }
    getAllMenuItemRecipes() {
        return this.menuItemRecipeService.getAll();
    }
    getMenuItemRecipeById(menuItem_id) {
        return this.menuItemRecipeService.readById({ id: menuItem_id });
    }
    addnewMenuItemRecipe(data) {
        return this.menuItemRecipeService.createMenuItemRecipe(data);
    }
    updateMenuItemRecipe(data) {
        return this.menuItemRecipeService.updateMenuItemRecipe(data);
    }
    deleteMenuItemRecipe() { }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItemRecipeController.prototype, "getAllMenuItemRecipes", null);
__decorate([
    common_1.Get(':menuItem_id'),
    __param(0, common_1.Param('menuItem_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuItemRecipeController.prototype, "getMenuItemRecipeById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuItemRecipeController.prototype, "addnewMenuItemRecipe", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuItemRecipeController.prototype, "updateMenuItemRecipe", null);
__decorate([
    common_1.Delete(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItemRecipeController.prototype, "deleteMenuItemRecipe", null);
MenuItemRecipeController = __decorate([
    common_1.Controller('menu-item-recipe'),
    __metadata("design:paramtypes", [menu_item_recipe_service_1.MenuItemRecipeService])
], MenuItemRecipeController);
exports.MenuItemRecipeController = MenuItemRecipeController;
//# sourceMappingURL=menu-item-recipe.controller.js.map