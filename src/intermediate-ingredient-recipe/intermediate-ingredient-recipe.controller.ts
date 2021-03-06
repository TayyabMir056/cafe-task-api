import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UsePipes,
  HttpException,
  HttpService,
  HttpStatus,
} from '@nestjs/common';
import { IntermediateIngredientRecipeService } from './intermediate-ingredient-recipe.service';
import { IntermediateIngredientRecipeDTO } from './intermediate-ingredient-recipe.dto';
import { ValidationPipe } from '../shared/validation.pipe';
var validate = require('uuid-validate');

@Controller('intermediate-ingredient-recipe')
export class IntermediateIngredientRecipeController {
  constructor(
    private intermediateIngredientRecipeService: IntermediateIngredientRecipeService,
  ) {}

  @Get()
  getAllIntermediateIngredientRecipe() {
    //Calling service function
    return this.intermediateIngredientRecipeService.getAll();
  }

  @Get(':intermediateIngredient_id')
  getRecipeByIntermediateIngredientId(
    @Param('intermediateIngredient_id') intermediateIngredient_id: string, //We get the all the recipe items corresponding to a single intermediate ingredient id
  ) {
    //Check id is valid uuid
    if (!validate(intermediateIngredient_id)) {
      //throw exception if the id is not a valid uuid
      throw new HttpException('Invalid id', HttpStatus.BAD_REQUEST);
    }
    //Otherwise call the service function
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
    //Calling the service function
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
    //Check id is valid uuid
    if (!validate(intermediateIngredient_id)) {
      //throw exception if not a valid uuid
      throw new HttpException('Invalid id', HttpStatus.BAD_REQUEST);
    }
    //Call service function
    this.intermediateIngredientRecipeService.updateIntermediateIngredientRecipe(
      intermediateIngredient_id,
      data,
    );
  }

  @Delete(':id')
  deleteRecipeForIntermediateIngredient(@Param('id') id: string) {
    //Check id is valid uuid
    if (!validate(id)) {
      throw new HttpException('Invalid id', HttpStatus.BAD_REQUEST);
    }
    //Call service function
    this.intermediateIngredientRecipeService.deleteIntermediateIngredientRecipe(
      id,
    );
  }
}
