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
const menu_item_category_entity_1 = require("../menu-item-category/menu-item-category.entity");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class MenuItemDTO {
}
__decorate([
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], MenuItemDTO.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], MenuItemDTO.prototype, "name", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => menu_item_category_entity_1.MenuItemCategory),
    __metadata("design:type", menu_item_category_entity_1.MenuItemCategory)
], MenuItemDTO.prototype, "category", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MenuItemDTO.prototype, "sellingPrice", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], MenuItemDTO.prototype, "cost", void 0);
exports.MenuItemDTO = MenuItemDTO;
//# sourceMappingURL=menu-item.dto.js.map