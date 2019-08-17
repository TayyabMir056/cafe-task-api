import { MenuItem } from '../MenuItem/MenuItem.entity';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient.entity';
import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient.entity';
export declare class MenuItemRecipe {
    id: string;
    menuItem: MenuItem | null;
    inventoryIngredient: InventoryIngredient | null;
    intermediateIngredient: IntermediateIngredient | null;
    quantity: number;
}
