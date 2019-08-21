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
  HttpStatus,
} from '@nestjs/common';
import { ADDRGETNETWORKPARAMS } from 'dns';
import { IntermediateIngredientService } from './intermediate-ingredient.service';
import { IntermediateIngredientDTO } from './intermediate-ingredient.dto';
import { ValidationPipe } from '..//shared/validation.pipe';
var validate = require('uuid-validate');

@Controller('intermediate-ingredient')
export class IntermediateIngredientController {
  constructor(
    private intermediateIngredientService: IntermediateIngredientService,
  ) {}
  @Get()
  getAllIntermediateIngredient() {
    //Calling Service function
    return this.intermediateIngredientService.getAll();
  }

  @Get(':id')
  getIntermediateIngredientById(@Param('id') id: string) {
    //Check if the id is a valid uuid
    if (!validate(id)) {
      //throw exception if id is not valid
      throw new HttpException('Invalid id ', HttpStatus.BAD_REQUEST);
    }
    //call service function
    return this.intermediateIngredientService.read(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addNewIntermediateIngredient(
    @Body() data: Partial<IntermediateIngredientDTO>,
  ) {
    //Call service function
    return this.intermediateIngredientService.create(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateIntermediateIngredient(
    @Param('id') id: string,
    @Body() data: Partial<IntermediateIngredientDTO>,
  ) {
    //Check if if provided is a valid uuid
    if (!validate(id)) {
      //Throw exception if id is not a valid uuid
      throw new HttpException('Invalid id ', HttpStatus.BAD_REQUEST);
    }
    //Otherwise call service function
    return this.intermediateIngredientService.update(id, data);
  }

  @Delete(':id')
  deleteIntermediateIngredient(@Param('id') id: string) {
    //Check if id is a valid uuid
    if (!validate(id)) {
      //throw exvcption if id is not a valid uuid
      throw new HttpException('Invalid id ', HttpStatus.BAD_REQUEST);
    }
    //Otherwise call the service function
    return this.intermediateIngredientService.delete(id);
  }
}
