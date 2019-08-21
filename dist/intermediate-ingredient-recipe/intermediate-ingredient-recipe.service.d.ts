import { IntermediateIngredientRecipe } from './intermediate-ingredient-recipe.entity';
import { Repository } from 'typeorm';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
import { IntermediateIngredientRecipeDTO } from './intermediate-ingredient-recipe.dto';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
export declare class IntermediateIngredientRecipeService {
    private intermediateIngredientRecipeRespository;
    private intermediateIngredientRespository;
    private inventoryIngredientRepository;
    constructor(intermediateIngredientRecipeRespository: Repository<IntermediateIngredientRecipe>, intermediateIngredientRespository: Repository<IntermediateIngredient>, inventoryIngredientRepository: Repository<InventoryIngredient>);
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
    updateIntermediateIngredientCost(intermediateIngredient: IntermediateIngredient): Promise<{
        updated: string;
    }>;
}
