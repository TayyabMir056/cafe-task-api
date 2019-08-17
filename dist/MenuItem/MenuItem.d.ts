import { MenuItemCategory } from '../MenuItemCategory/MenuItemCategory';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe';
export declare class MenuItem {
    id: string;
    name: string;
    category: MenuItemCategory | null;
    sellingPrice: number;
    cost: number;
    menuItemRecipes: MenuItemRecipe[];
}
