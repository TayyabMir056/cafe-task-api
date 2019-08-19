import { MenuItem } from '../menu-item/menu-item.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { IngredientType } from '../IngredientType/IngredientType.enum';
declare class recipeDTO {
    inventoryIngredient?: InventoryIngredient;
    intermediateIngredient?: IntermediateIngredient;
    ingredientType: IngredientType;
    quantity: number;
}
export declare class MenuItemRecipeDTO {
    menuItem: MenuItem;
    recipe: recipeDTO[];
}
export {};
