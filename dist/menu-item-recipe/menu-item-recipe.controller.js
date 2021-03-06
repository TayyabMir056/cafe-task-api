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
const validation_pipe_1 = require("../shared/validation.pipe");
var validate = require('uuid-validate');
let MenuItemRecipeController = class MenuItemRecipeController {
    constructor(menuItemRecipeService) {
        this.menuItemRecipeService = menuItemRecipeService;
    }
    getAllMenuItemRecipes() {
        return this.menuItemRecipeService.getAll();
    }
    getMenuItemRecipeById(menuItem_id) {
        if (!validate(menuItem_id)) {
            throw new common_1.HttpException('invalid id format!', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.menuItemRecipeService.readById({ id: menuItem_id });
    }
    addnewMenuItemRecipe(data) {
        return this.menuItemRecipeService.createMenuItemRecipe(data);
    }
    updateMenuItemRecipe(data) {
        return this.menuItemRecipeService.updateMenuItemRecipe(data);
    }
    deleteMenuItemRecipe(id) {
        if (!validate(id)) {
            throw new common_1.HttpException('invalid id format!', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.menuItemRecipeService.delete(id);
    }
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
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuItemRecipeController.prototype, "addnewMenuItemRecipe", null);
__decorate([
    common_1.Put(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuItemRecipeController.prototype, "updateMenuItemRecipe", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuItemRecipeController.prototype, "deleteMenuItemRecipe", null);
MenuItemRecipeController = __decorate([
    common_1.Controller('menu-item-recipe'),
    __metadata("design:paramtypes", [menu_item_recipe_service_1.MenuItemRecipeService])
], MenuItemRecipeController);
exports.MenuItemRecipeController = MenuItemRecipeController;
//# sourceMappingURL=menu-item-recipe.controller.js.map