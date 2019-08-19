import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
} from '@nestjs/common';
import { IntermediateIngredientRecipeService } from './intermediate-ingredient-recipe.service';
import { IntermediateIngredientRecipeDTO } from './intermediate-ingredient-recipe.dto';
import { ValidationPipe } from '../shared/validation.pipe';

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
    return this.intermediateIngredientRecipeService.getRecipeByIntermediateIngredient(
      {
        id: intermediateIngredient_id,
      },
    );
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addRecipeForIntermediateIngredient(
    @Body() data: IntermediateIngredientRecipeDTO,
  ) {
    return this.intermediateIngredientRecipeService.createRecipeForIntermediateIngredient(
      data,
    );
  }

  @Put(':intermediateIngredient_id')
  @UsePipes(new ValidationPipe())
  updateRecipeForIntermediateIngredient(
    @Param('intermediateIngredient_id') intermediateIngredient_id: string,
    @Body() data: IntermediateIngredientRecipeDTO,
  ) {
    this.intermediateIngredientRecipeService.updateIntermediateIngredientRecipe(
      intermediateIngredient_id,
      data,
    );
  }

  @Delete(':id')
  deleteRecipeForIntermediateIngredient(@Param('id') id: string) {
    this.intermediateIngredientRecipeService.deleteIntermediateIngredientRecipe(
      id,
    );
  }
}
