import { MenuItemCategory } from '../MenuItemCategory/MenuItemCategory.entity';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe.entity';
export declare class MenuItem {
    id: string;
    name: string;
    category: MenuItemCategory | null;
    sellingPrice: number;
    cost: number;
    menuItemRecipes: MenuItemRecipe[];
}
