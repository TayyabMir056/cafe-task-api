import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient';
export declare class IntermediateIngredientRecipe {
    id: string;
    intermediateIngredient: IntermediateIngredient | null;
    inventoryIngredient: InventoryIngredient | null;
    quantity: number;
}
