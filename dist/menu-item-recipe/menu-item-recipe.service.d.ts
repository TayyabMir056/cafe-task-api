import { Repository } from 'typeorm';
import { MenuItemRecipe } from './menu-item-recipe.entity';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
import { MenuItem } from '../menu-item/menu-item.entity';
export declare class MenuItemRecipeService {
    private menuItemRecipeRepository;
    private menuItemRepository;
    constructor(menuItemRecipeRepository: Repository<MenuItemRecipe>, menuItemRepository: Repository<MenuItem>);
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
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
    updateMenuItemCost(menuItem: Partial<MenuItem>): Promise<void>;
}
