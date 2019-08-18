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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const price_unit_entity_1 = require("./price-unit.entity");
let PriceUnitService = class PriceUnitService {
    constructor(priceUnitRepository) {
        this.priceUnitRepository = priceUnitRepository;
    }
    async showAll() {
        return await this.priceUnitRepository.find();
    }
    async create(data) {
        const priceUnit = await this.priceUnitRepository.create(data);
        await this.priceUnitRepository.save(priceUnit);
        return priceUnit;
    }
    async read(id) {
        return await this.priceUnitRepository.findOne({ id });
    }
    async update(id, data) {
        await this.priceUnitRepository.update({ id }, data);
        return await this.priceUnitRepository.findOne({ id });
    }
    async destroy(id) {
        await this.priceUnitRepository.delete({ id });
        return { deleted: 'successful' };
    }
};
PriceUnitService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(price_unit_entity_1.PriceUnit)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PriceUnitService);
exports.PriceUnitService = PriceUnitService;
//# sourceMappingURL=price-unit.service.js.map