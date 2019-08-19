import { IntermediateIngredientRecipe } from './intermediate-ingredient-recipe.entity';
import { Repository } from 'typeorm';
import { IntermediateIngredientRecipeDTO } from './intermediate-ingredient-recipe.dto';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
export declare class IntermediateIngredientRecipeService {
    private intermediateIngredientRecipeRespository;
    private intermediateIngredientRespository;
    constructor(intermediateIngredientRecipeRespository: Repository<IntermediateIngredientRecipe>, intermediateIngredientRespository: Repository<IntermediateIngredient>);
    getAll(): Promise<IntermediateIngredientRecipe[]>;
    getRecipeByIntermediateIngredient(intermediateIngredient: Partial<IntermediateIngredient>): Promise<{
        intermediateIngredient: string;
        recipe: any[];
    }>;
    createRecipeForIntermediateIngredient(intermediateIngredientRecipe: IntermediateIngredientRecipeDTO): Promise<{
        recipeAddedForId: IntermediateIngredient;
    }>;
    updateIntermediateIngredientRecipe(intermediateIngredient_id: string, data: IntermediateIngredientRecipeDTO): Promise<{
        intermediateIngredient: string;
        recipe: any[];
    }>;
    deleteIntermediateIngredientRecipe(id: string): Promise<{
        deleted: boolean;
    }>;
    updateIntermediateIngredientCost(intermediateIngredient: IntermediateIngredient): Promise<void>;
}
