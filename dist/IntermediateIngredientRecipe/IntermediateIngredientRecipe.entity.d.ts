import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
export declare class IntermediateIngredientRecipe {
    id: string;
    intermediateIngredient: IntermediateIngredient | null;
    inventoryIngredient: InventoryIngredient | null;
    quantity: number;
}
