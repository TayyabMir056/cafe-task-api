import { MenuItemRecipeService } from './menu-item-recipe.service';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
export declare class MenuItemRecipeController {
    private menuItemRecipeService;
    constructor(menuItemRecipeService: MenuItemRecipeService);
    getAllMenuItemRecipes(): void;
    getMenuItemRecipeById(): void;
    addnewMenuItemRecipe(data: MenuItemRecipeDTO): Promise<void>;
    updateMenuItemRecipe(data: MenuItemRecipeDTO): Promise<void>;
    deleteMenuItemRecipe(): void;
}
