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
const intermediate_ingredient_service_1 = require("./intermediate-ingredient.service");
const validation_pipe_1 = require("..//shared/validation.pipe");
var validate = require('uuid-validate');
let IntermediateIngredientController = class IntermediateIngredientController {
    constructor(intermediateIngredientService) {
        this.intermediateIngredientService = intermediateIngredientService;
    }
    getAllIntermediateIngredient() {
        return this.intermediateIngredientService.getAll();
    }
    getIntermediateIngredientById(id) {
        if (!validate(id)) {
            throw new common_1.HttpException('Invalid id ', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.intermediateIngredientService.read(id);
    }
    addNewIntermediateIngredient(data) {
        return this.intermediateIngredientService.create(data);
    }
    updateIntermediateIngredient(id, data) {
        if (!validate(id)) {
            throw new common_1.HttpException('Invalid id ', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.intermediateIngredientService.update(id, data);
    }
    deleteIntermediateIngredient(id) {
        if (!validate(id)) {
            throw new common_1.HttpException('Invalid id ', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.intermediateIngredientService.delete(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IntermediateIngredientController.prototype, "getAllIntermediateIngredient", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IntermediateIngredientController.prototype, "getIntermediateIngredientById", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IntermediateIngredientController.prototype, "addNewIntermediateIngredient", null);
__decorate([
    common_1.Put(':id'),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], IntermediateIngredientController.prototype, "updateIntermediateIngredient", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IntermediateIngredientController.prototype, "deleteIntermediateIngredient", null);
IntermediateIngredientController = __decorate([
    common_1.Controller('intermediate-ingredient'),
    __metadata("design:paramtypes", [intermediate_ingredient_service_1.IntermediateIngredientService])
], IntermediateIngredientController);
exports.IntermediateIngredientController = IntermediateIngredientController;
//# sourceMappingURL=intermediate-ingredient.controller.js.map