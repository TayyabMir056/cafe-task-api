import { IntermediateIngredientRecipeService } from './intermediate-ingredient-recipe.service';
import { IntermediateIngredientRecipeDTO } from './intermediate-ingredient-recipe.dto';
export declare class IntermediateIngredientRecipeController {
    private intermediateIngredientRecipeService;
    constructor(intermediateIngredientRecipeService: IntermediateIngredientRecipeService);
    getAllIntermediateIngredientRecipe(): Promise<import("./intermediate-ingredient-recipe.entity").IntermediateIngredientRecipe[]>;
    getRecipeByIntermediateIngredientId(intermediateIngredient_id: string): void;
    addRecipeForIntermediateIngredient(data: IntermediateIngredientRecipeDTO): Promise<{
        recipeAddedForId: import("../intermediate-ingredient/intermediate-ingredient.entity").IntermediateIngredient;
    }>;
    updateRecipeForIntermediateIngredient(intermediateIngredient_id: string, data: IntermediateIngredientRecipeDTO): void;
    deleteRecipeForIntermediateIngredient(intermediateIngredient_id: string): void;
}
