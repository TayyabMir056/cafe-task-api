import { Repository } from 'typeorm';
import { MenuItemRecipe } from './menu-item-recipe.entity';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
import { MenuItem } from 'src/menu-item/menu-item.entity';
export declare class MenuItemRecipeService {
    private menuItemRecipeRepository;
    constructor(menuItemRecipeRepository: Repository<MenuItemRecipe>);
    getAll(): Promise<MenuItemRecipe[]>;
    readById(menuItem: MenuItem): Promise<void>;
    createMenuItemRecipe(data: MenuItemRecipeDTO): Promise<void>;
    updateMenuItemRecipe(data: MenuItemRecipeDTO): Promise<void>;
}
