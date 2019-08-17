import { Repository } from 'typeorm';
import { MenuItemCategoryDTO } from './menu-item-category.dto';
import { MenuItemCategory } from './menu-item-category.entity';
export declare class MenuItemCategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<MenuItemCategory>);
    showAll(): Promise<MenuItemCategory[]>;
    create(data: Partial<MenuItemCategoryDTO>): Promise<Partial<MenuItemCategoryDTO>>;
    read(id: string): Promise<MenuItemCategory>;
    update(id: string, data: Partial<MenuItemCategoryDTO>): Promise<MenuItemCategory>;
    destroy(id: string): Promise<{
        deleted: boolean;
    }>;
}
