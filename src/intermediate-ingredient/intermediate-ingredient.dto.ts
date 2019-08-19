import { PriceUnit } from 'src/price-unit/price-unit.entity';
import { IsString, IsNumber } from 'class-validator';
import { isClass } from '@babel/types';

export class IntermediateIngredientDTO {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  cost: number;

  priceUnit: PriceUnit;
}
