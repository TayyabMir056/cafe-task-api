import { Repository } from 'typeorm';
import { MenuItemRecipe } from './menu-item-recipe.entity';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
import { MenuItem } from 'src/menu-item/menu-item.entity';
export declare class MenuItemRecipeService {
    private menuItemRecipeRepository;
    constructor(menuItemRecipeRepository: Repository<MenuItemRecipe>);
    getAll(): Promise<MenuItemRecipe[]>;
    readById(menuItem: Partial<MenuItem>): Promise<{
        menuItem: Partial<MenuItem>;
        recipe: any[];
    }>;
    createMenuItemRecipe(data: MenuItemRecipeDTO): Promise<{
        menuItem: Partial<MenuItem>;
        recipe: any[];
    }>;
    updateMenuItemRecipe(data: MenuItemRecipeDTO): Promise<{
        menuItem: Partial<MenuItem>;
        recipe: any[];
    }>;
    delete(menuItem: Partial<MenuItem>): Promise<{
        deleted: boolean;
    }>;
}
