import { MenuItem } from './menu-item.entity';
import { Repository } from 'typeorm';
import { MenuItemDTO } from './menu-item.dto';
export declare class MenuItemService {
    private menuItemRepository;
    constructor(menuItemRepository: Repository<MenuItem>);
    showAll(): Promise<MenuItem[]>;
    read(id: string): Promise<MenuItem>;
    create(data: Partial<MenuItemDTO>): Promise<MenuItem>;
    update(id: string, data: Partial<MenuItem>): Promise<MenuItem>;
    delete(id: any): Promise<{
        delete: boolean;
    }>;
}
