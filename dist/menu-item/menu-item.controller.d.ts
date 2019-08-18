import { MenuItemDTO } from './menu-item.dto';
import { MenuItemService } from './menu-item.service';
export declare class MenuItemController {
    private menuItemService;
    constructor(menuItemService: MenuItemService);
    getAllMenuITems(): Promise<import("./menu-item.entity").MenuItem[]>;
    getMenuItemById(id: string): Promise<import("./menu-item.entity").MenuItem>;
    addnewMenuItem(data: Partial<MenuItemDTO>): Promise<import("./menu-item.entity").MenuItem>;
    updateMenuItem(id: string, data: Partial<MenuItemDTO>): Promise<import("./menu-item.entity").MenuItem>;
    deleteMenuItem(id: string): Promise<{
        delete: boolean;
    }>;
}
