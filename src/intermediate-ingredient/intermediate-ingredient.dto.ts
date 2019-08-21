import { PriceUnit } from '../price-unit/price-unit.entity';
import { IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class IntermediateIngredientDTO {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  cost: number;

  @ValidateNested({ each: true })
  @Type(() => PriceUnit)
  priceUnit: PriceUnit;
}
