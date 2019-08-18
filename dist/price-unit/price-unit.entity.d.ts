import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
export declare class PriceUnit {
    id: string;
    name: string;
    intermediateIngredients: IntermediateIngredient[];
    inventoryIngredients: InventoryIngredient[];
}
