import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IntermediateIngredientRecipe } from './intermediate-ingredient-recipe.entity';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { IntermediateIngredientRecipeController } from './intermediate-ingredient-recipe.controller';
import { IntermediateIngredientRecipeService } from './intermediate-ingredient-recipe.service';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      IntermediateIngredientRecipe,
      IntermediateIngredient,
      InventoryIngredient,
    ]),
  ],
  controllers: [IntermediateIngredientRecipeController],
  providers: [IntermediateIngredientRecipeService],
})
export class IntermediateIngredientRecipeModule {}
