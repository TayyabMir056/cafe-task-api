import { MenuItem } from '../MenuItem/MenuItem';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient';
import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient';
export declare class MenuItemRecipe {
    id: string;
    menuItem: MenuItem | null;
    inventoryIngredient: InventoryIngredient | null;
    intermediateIngredient: IntermediateIngredient | null;
    quantity: number;
}
