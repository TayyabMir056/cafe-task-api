import { MenuItemCategory } from '../menu-item-category/menu-item-category.entity';
export declare class MenuItemDTO {
    id?: string;
    name: string;
    category: MenuItemCategory;
    sellingPrice: number;
    cost?: number;
}
