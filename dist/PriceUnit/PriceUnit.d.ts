import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient';
export declare class PriceUnit {
    id: string;
    name: string;
    intermediateIngredients: IntermediateIngredient[];
    inventoryIngredients: InventoryIngredient[];
}
