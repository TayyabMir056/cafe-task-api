import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IntermediateIngredientRecipe } from './intermediate-ingredient-recipe.entity';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { IntermediateIngredientRecipeController } from './intermediate-ingredient-recipe.controller';
import { IntermediateIngredientRecipeService } from './intermediate-ingredient-recipe.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      IntermediateIngredientRecipe,
      IntermediateIngredient,
    ]),
  ],
  controllers: [IntermediateIngredientRecipeController],
  providers: [IntermediateIngredientRecipeService],
})
export class IntermediateIngredientRecipeModule {}
