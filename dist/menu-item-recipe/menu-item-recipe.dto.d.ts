import { MenuItem } from 'src/menu-item/menu-item.entity';
import { InventoryIngredient } from 'src/inventory-ingredient/inventory-ingredient.entity';
import { IntermediateIngredient } from 'src/intermediate-ingredient/intermediate-ingredient.entity';
import { IngredientType } from 'src/IngredientType/IngredientType.enum';
export interface MenuItemRecipeDTO {
    menuItem: MenuItem;
    recipe: {
        inventoryIngredient?: InventoryIngredient;
        intermediateIngredient?: IntermediateIngredient;
        ingredientType: IngredientType;
        quantity: number;
    }[];
}
