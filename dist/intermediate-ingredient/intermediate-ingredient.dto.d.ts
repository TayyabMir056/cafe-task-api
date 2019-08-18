import { PriceUnit } from 'src/price-unit/price-unit.entity';
export interface IntermediateIngredientDTO {
    id: string;
    name: string;
    cost: number;
    priceUnit: PriceUnit;
}
