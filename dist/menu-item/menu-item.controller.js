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
const menu_item_service_1 = require("./menu-item.service");
const validation_pipe_1 = require("../shared/validation.pipe");
let MenuItemController = class MenuItemController {
    constructor(menuItemService) {
        this.menuItemService = menuItemService;
    }
    getAllMenuITems() {
        return this.menuItemService.showAll();
    }
    getMenuItemById(id) {
        return this.menuItemService.read(id);
    }
    addnewMenuItem(data) {
        return this.menuItemService.create(data);
    }
    updateMenuItem(id, data) {
        return this.menuItemService.update(id, data);
    }
    deleteMenuItem(id) {
        return this.menuItemService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItemController.prototype, "getAllMenuITems", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuItemController.prototype, "getMenuItemById", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MenuItemController.prototype, "addnewMenuItem", null);
__decorate([
    common_1.Put(':id'),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MenuItemController.prototype, "updateMenuItem", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuItemController.prototype, "deleteMenuItem", null);
MenuItemController = __decorate([
    common_1.Controller('menu-item'),
    __metadata("design:paramtypes", [menu_item_service_1.MenuItemService])
], MenuItemController);
exports.MenuItemController = MenuItemController;
//# sourceMappingURL=menu-item.controller.js.map