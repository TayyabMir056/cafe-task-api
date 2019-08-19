import { IsString, IsUUID } from 'class-validator';
import { IsNull } from 'typeorm';

export class MenuItemCategoryDTO {
  @IsUUID()
  id: string;

  @IsString()
  name: string;
}
