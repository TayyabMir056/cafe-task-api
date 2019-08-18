import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient.entity';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient.entity';
export declare class PriceUnit {
    id: string;
    name: string;
    intermediateIngredients: IntermediateIngredient[];
    inventoryIngredients: InventoryIngredient[];
}
