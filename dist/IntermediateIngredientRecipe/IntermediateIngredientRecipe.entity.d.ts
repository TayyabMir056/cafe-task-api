import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient.entity';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient.entity';
export declare class IntermediateIngredientRecipe {
    id: string;
    intermediateIngredient: IntermediateIngredient | null;
    inventoryIngredient: InventoryIngredient | null;
    quantity: number;
}
