import { MenuItemRecipeService } from './menu-item-recipe.service';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
export declare class MenuItemRecipeController {
    private menuItemRecipeService;
    constructor(menuItemRecipeService: MenuItemRecipeService);
    getAllMenuItemRecipes(): Promise<import("./menu-item-recipe.entity").MenuItemRecipe[]>;
    getMenuItemRecipeById(menuItem_id: string): Promise<import("./menu-item-recipe.entity").MenuItemRecipe[]>;
    addnewMenuItemRecipe(data: MenuItemRecipeDTO): Promise<import("./menu-item-recipe.entity").MenuItemRecipe[]>;
    updateMenuItemRecipe(data: MenuItemRecipeDTO): Promise<import("./menu-item-recipe.entity").MenuItemRecipe[]>;
    deleteMenuItemRecipe(): void;
}
