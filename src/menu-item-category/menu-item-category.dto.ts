import { IsString, IsUUID } from 'class-validator';

export class MenuItemCategoryDTO {
  @IsUUID()
  id: string;

  @IsString()
  name: string;
}
