import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
declare class InventoryItemQuantityDTO {
    inventoryIngredient: InventoryIngredient;
    quantity: number;
}
export declare class IntermediateIngredientRecipeDTO {
    intermediateIngredient: IntermediateIngredient;
    recipe: InventoryItemQuantityDTO[];
}
export {};
