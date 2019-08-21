import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
import { ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

//For Validation
class InventoryItemQuantityDTO {
  @ValidateNested({ each: true })
  @Type(() => InventoryIngredient)
  inventoryIngredient: InventoryIngredient;

  @IsNumber()
  quantity: number;
}

export class IntermediateIngredientRecipeDTO {
  @ValidateNested({ each: true })
  @Type(() => IntermediateIngredient)
  intermediateIngredient: IntermediateIngredient;

  @ValidateNested({ each: true })
  @Type(() => InventoryItemQuantityDTO)
  recipe: InventoryItemQuantityDTO[];
}
