import { IntermediateIngredientRecipe } from './intermediate-ingredient-recipe.entity';
import { Repository } from 'typeorm';
import { IntermediateIngredientRecipeDTO } from './intermediate-ingredient-recipe.dto';
import { IntermediateIngredient } from 'src/intermediate-ingredient/intermediate-ingredient.entity';
export declare class IntermediateIngredientRecipeService {
    private intermediateIngredientRecipeRespository;
    constructor(intermediateIngredientRecipeRespository: Repository<IntermediateIngredientRecipe>);
    getAll(): Promise<IntermediateIngredientRecipe[]>;
    getRecipeByIntermediateIngredient(intermediateIngredient: Partial<IntermediateIngredient>): Promise<IntermediateIngredientRecipe[]>;
    createRecipeForIntermediateIngredient(intermediateIngredientRecipe: IntermediateIngredientRecipeDTO): Promise<{
        recipeAddedForId: IntermediateIngredient;
    }>;
    updateIntermediateIngredientRecipe(intermediateIngredient_id: string, data: IntermediateIngredientRecipeDTO): Promise<IntermediateIngredientRecipe[]>;
    deleteIntermediateIngredientRecipe(intermediateIngredient: Partial<IntermediateIngredient>): Promise<{
        deleted: boolean;
    }>;
}
