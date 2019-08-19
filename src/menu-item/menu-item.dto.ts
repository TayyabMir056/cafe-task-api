import { MenuItemCategory } from '../menu-item-category/menu-item-category.entity';
import { IsUUID, IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class MenuItemDTO {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @ValidateNested({ each: true })
  @Type(() => MenuItemCategory)
  category: MenuItemCategory;

  @IsNumber()
  sellingPrice: number;

  @IsNumber()
  cost: number;
}
