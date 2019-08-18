import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
export declare class PriceUnit {
    id: string;
    name: string;
    intermediateIngredients: IntermediateIngredient[];
    inventoryIngredients: InventoryIngredient[];
}
