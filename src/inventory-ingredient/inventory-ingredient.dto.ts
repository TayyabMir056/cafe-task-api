import { PriceUnit } from '../price-unit/price-unit.entity';
import { IsUUID, IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class InventoryIngredientDTO {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  cost: number;

  @ValidateNested({ each: true })
  @Type(() => PriceUnit)
  priceUnit: PriceUnit;
}
