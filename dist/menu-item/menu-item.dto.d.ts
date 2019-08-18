import { MenuItemCategory } from 'src/menu-item-category/menu-item-category.entity';
export interface MenuItemDTO {
    id: string;
    name: string;
    category: MenuItemCategory;
    sellingPrice: number;
    cost: number;
}
