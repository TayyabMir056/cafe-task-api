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
const price_unit_service_1 = require("./price-unit.service");
const validation_pipe_1 = require("../shared/validation.pipe");
var validate = require('uuid-validate');
let PriceUnitController = class PriceUnitController {
    constructor(priceUnitService) {
        this.priceUnitService = priceUnitService;
    }
    getAllPriceUnits() {
        return this.priceUnitService.showAll();
    }
    getUnitById(id) {
        if (!validate(id)) {
            throw new common_1.HttpException('Not Valid id', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.priceUnitService.read(id);
    }
    createPriceUnit(data) {
        return this.priceUnitService.create(data);
    }
    updatePriceUnit(id, data) {
        if (!validate(id)) {
            throw new common_1.HttpException('Not Valid id', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.priceUnitService.update(id, data);
    }
    deletePriceUnit(id) {
        if (!validate(id)) {
            throw new common_1.HttpException('Not Valid id', common_1.HttpStatus.BAD_REQUEST);
        }
        return this.priceUnitService.destroy(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PriceUnitController.prototype, "getAllPriceUnits", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PriceUnitController.prototype, "getUnitById", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PriceUnitController.prototype, "createPriceUnit", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PriceUnitController.prototype, "updatePriceUnit", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PriceUnitController.prototype, "deletePriceUnit", null);
PriceUnitController = __decorate([
    common_1.Controller('units'),
    __metadata("design:paramtypes", [price_unit_service_1.PriceUnitService])
], PriceUnitController);
exports.PriceUnitController = PriceUnitController;
//# sourceMappingURL=price-unit.controller.js.map