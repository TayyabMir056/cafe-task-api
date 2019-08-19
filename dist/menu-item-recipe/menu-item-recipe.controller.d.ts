import { MenuItemRecipeService } from './menu-item-recipe.service';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
export declare class MenuItemRecipeController {
    private menuItemRecipeService;
    constructor(menuItemRecipeService: MenuItemRecipeService);
    getAllMenuItemRecipes(): Promise<import("./menu-item-recipe.entity").MenuItemRecipe[]>;
    getMenuItemRecipeById(menuItem_id: string): Promise<{
        menuItem: Partial<import("../menu-item/menu-item.entity").MenuItem>;
        recipe: any[];
    }>;
    addnewMenuItemRecipe(data: MenuItemRecipeDTO): Promise<{
        menuItem: Partial<import("../menu-item/menu-item.entity").MenuItem>;
        recipe: any[];
    }>;
    updateMenuItemRecipe(data: MenuItemRecipeDTO): Promise<{
        menuItem: Partial<import("../menu-item/menu-item.entity").MenuItem>;
        recipe: any[];
    }>;
    deleteMenuItemRecipe(id: string): Promise<{
        deleted: boolean;
    }>;
}
