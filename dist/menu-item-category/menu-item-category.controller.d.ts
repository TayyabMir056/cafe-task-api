import { MenuItemCategoryService } from './menu-item-category.service';
import { MenuItemCategoryDTO } from './menu-item-category.dto';
export declare class MenuItemCategoryController {
    private menuItemCategoryService;
    constructor(menuItemCategoryService: MenuItemCategoryService);
    getAllCategories(): Promise<import("./menu-item-category.entity").MenuItemCategory[]>;
    addNewCategory(data: MenuItemCategoryDTO): Promise<Partial<MenuItemCategoryDTO>>;
    getCategoryById(id: number): Promise<import("./menu-item-category.entity").MenuItemCategory>;
    updateCategory(id: string, data: Partial<MenuItemCategoryDTO>): Promise<import("./menu-item-category.entity").MenuItemCategory>;
    deleteCategory(id: string): Promise<{
        deleted: boolean;
    }>;
}
