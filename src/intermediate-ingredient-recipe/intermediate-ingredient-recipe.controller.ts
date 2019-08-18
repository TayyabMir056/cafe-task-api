import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { IntermediateIngredientRecipeService } from './intermediate-ingredient-recipe.service';
import { IntermediateIngredientRecipeDTO } from './intermediate-ingredient-recipe.dto';

@Controller('intermediate-ingredient-recipe')
export class IntermediateIngredientRecipeController {
  constructor(
    private intermediateIngredientRecipeService: IntermediateIngredientRecipeService,
  ) {}

  @Get()
  getAllIntermediateIngredientRecipe() {
    return this.intermediateIngredientRecipeService.getAll();
  }

  @Get(':intermediateIngredient_id')
  getRecipeByIntermediateIngredientId(
    @Param('intermediateIngredient_id') intermediateIngredient_id: string,
  ) {
    this.intermediateIngredientRecipeService.getRecipeByIntermediateIngredient({
      id: intermediateIngredient_id,
    });
  }

  @Post()
  addRecipeForIntermediateIngredient(
    @Body() data: IntermediateIngredientRecipeDTO,
  ) {
    return this.intermediateIngredientRecipeService.createRecipeForIntermediateIngredient(
      data,
    );
  }

  @Put(':intermediateIngredient_id')
  updateRecipeForIntermediateIngredient(
    @Param('intermediateIngredient_id') intermediateIngredient_id: string,
    @Body() data: IntermediateIngredientRecipeDTO,
  ) {
    this.intermediateIngredientRecipeService.updateIntermediateIngredientRecipe(
      intermediateIngredient_id,
      data,
    );
  }

  @Delete(':intermediateIngredient_id')
  deleteRecipeForIntermediateIngredient(
    @Param('intermediateIngredient_id') intermediateIngredient_id: string,
  ) {
    this.intermediateIngredientRecipeService.deleteIntermediateIngredientRecipe(
      { id: intermediateIngredient_id },
    );
  }
}
