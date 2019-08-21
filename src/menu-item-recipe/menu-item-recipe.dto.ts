import { MenuItem } from '../menu-item/menu-item.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { IngredientType } from '../IngredientType/IngredientType.enum';
import { ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

//To provide for validation
class recipeDTO {
  @ValidateNested({ each: true })
  @Type(() => InventoryIngredient)
  inventoryIngredient?: InventoryIngredient;

  @ValidateNested({ each: true })
  @Type(() => IntermediateIngredient)
  intermediateIngredient?: IntermediateIngredient;

  ingredientType: IngredientType;

  @IsNumber()
  quantity: number;
}

export class MenuItemRecipeDTO {
  @ValidateNested({ each: true })
  @Type(() => MenuItem)
  menuItem: MenuItem;

  @ValidateNested({ each: true })
  @Type(() => recipeDTO)
  recipe: recipeDTO[];
}
