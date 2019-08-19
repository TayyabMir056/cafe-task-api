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
const intermediate_ingredient_entity_1 = require("./intermediate-ingredient.entity");
let IntermediateIngredientService = class IntermediateIngredientService {
    constructor(intermediateIngredientRepository) {
        this.intermediateIngredientRepository = intermediateIngredientRepository;
    }
    async getAll() {
        const intermediateIngredient = await this.intermediateIngredientRepository.find({
            relations: ['priceUnit'],
        });
        if (!intermediateIngredient) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return intermediateIngredient;
    }
    async read(id) {
        const intermediateIngredient = await this.intermediateIngredientRepository.findOne({ id }, { relations: ['priceUnit'] });
        if (!intermediateIngredient) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        return intermediateIngredient;
    }
    async create(data) {
        const intermediateIngredient = this.intermediateIngredientRepository.create(data);
        intermediateIngredient['cost'] = -1;
        await this.intermediateIngredientRepository.save(intermediateIngredient);
        return intermediateIngredient;
    }
    async update(id, data) {
        const intermediateIngredient = await this.intermediateIngredientRepository.findOne({ id });
        if (!intermediateIngredient) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.intermediateIngredientRepository.update({ id }, data);
        return this.read(id);
    }
    async delete(id) {
        const intermediateIngredient = await this.intermediateIngredientRepository.findOne({ id });
        if (!intermediateIngredient) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.intermediateIngredientRepository.delete({ id });
        return { deleted: true };
    }
};
IntermediateIngredientService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(intermediate_ingredient_entity_1.IntermediateIngredient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IntermediateIngredientService);
exports.IntermediateIngredientService = IntermediateIngredientService;
//# sourceMappingURL=intermediate-ingredient.service.js.map