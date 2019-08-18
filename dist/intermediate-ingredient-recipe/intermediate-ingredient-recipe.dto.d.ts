import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
export interface IntermediateIngredientRecipeDTO {
    intermediateIngredient: IntermediateIngredient;
    inventoryIngredientQuantities: {
        inventoryIngredient: InventoryIngredient;
        quantity: number;
    }[];
}
