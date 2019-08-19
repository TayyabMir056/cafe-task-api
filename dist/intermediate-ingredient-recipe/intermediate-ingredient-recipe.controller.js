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
const intermediate_ingredient_recipe_service_1 = require("./intermediate-ingredient-recipe.service");
const intermediate_ingredient_recipe_dto_1 = require("./intermediate-ingredient-recipe.dto");
const validation_pipe_1 = require("../shared/validation.pipe");
let IntermediateIngredientRecipeController = class IntermediateIngredientRecipeController {
    constructor(intermediateIngredientRecipeService) {
        this.intermediateIngredientRecipeService = intermediateIngredientRecipeService;
    }
    getAllIntermediateIngredientRecipe() {
        return this.intermediateIngredientRecipeService.getAll();
    }
    getRecipeByIntermediateIngredientId(intermediateIngredient_id) {
        return this.intermediateIngredientRecipeService.getRecipeByIntermediateIngredient({
            id: intermediateIngredient_id,
        });
    }
    addRecipeForIntermediateIngredient(data) {
        return this.intermediateIngredientRecipeService.createRecipeForIntermediateIngredient(data);
    }
    updateRecipeForIntermediateIngredient(intermediateIngredient_id, data) {
        this.intermediateIngredientRecipeService.updateIntermediateIngredientRecipe(intermediateIngredient_id, data);
    }
    deleteRecipeForIntermediateIngredient(id) {
        this.intermediateIngredientRecipeService.deleteIntermediateIngredientRecipe(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IntermediateIngredientRecipeController.prototype, "getAllIntermediateIngredientRecipe", null);
__decorate([
    common_1.Get(':intermediateIngredient_id'),
    __param(0, common_1.Param('intermediateIngredient_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IntermediateIngredientRecipeController.prototype, "getRecipeByIntermediateIngredientId", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [intermediate_ingredient_recipe_dto_1.IntermediateIngredientRecipeDTO]),
    __metadata("design:returntype", void 0)
], IntermediateIngredientRecipeController.prototype, "addRecipeForIntermediateIngredient", null);
__decorate([
    common_1.Put(':intermediateIngredient_id'),
    common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
    __param(0, common_1.Param('intermediateIngredient_id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, intermediate_ingredient_recipe_dto_1.IntermediateIngredientRecipeDTO]),
    __metadata("design:returntype", void 0)
], IntermediateIngredientRecipeController.prototype, "updateRecipeForIntermediateIngredient", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IntermediateIngredientRecipeController.prototype, "deleteRecipeForIntermediateIngredient", null);
IntermediateIngredientRecipeController = __decorate([
    common_1.Controller('intermediate-ingredient-recipe'),
    __metadata("design:paramtypes", [intermediate_ingredient_recipe_service_1.IntermediateIngredientRecipeService])
], IntermediateIngredientRecipeController);
exports.IntermediateIngredientRecipeController = IntermediateIngredientRecipeController;
//# sourceMappingURL=intermediate-ingredient-recipe.controller.js.map