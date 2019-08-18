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
const price_unit_entity_1 = require("./price-unit.entity");
const price_unit_controller_1 = require("./price-unit.controller");
const price_unit_service_1 = require("./price-unit.service");
let PriceUnitModule = class PriceUnitModule {
};
PriceUnitModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([price_unit_entity_1.PriceUnit])],
        controllers: [price_unit_controller_1.PriceUnitController],
        providers: [price_unit_service_1.PriceUnitService],
    })
], PriceUnitModule);
exports.PriceUnitModule = PriceUnitModule;
//# sourceMappingURL=price-unit.module.js.map