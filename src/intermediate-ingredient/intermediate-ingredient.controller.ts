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
    return this.intermediateIngredientService.getAll();
  }

  @Get(':id')
  getIntermediateIngredientById(@Param('id') id: string) {
    if (!validate(id)) {
      throw new HttpException('Invalid id ', HttpStatus.BAD_REQUEST);
    }
    return this.intermediateIngredientService.read(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addNewIntermediateIngredient(
    @Body() data: Partial<IntermediateIngredientDTO>,
  ) {
    return this.intermediateIngredientService.create(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateIntermediateIngredient(
    @Param('id') id: string,
    @Body() data: Partial<IntermediateIngredientDTO>,
  ) {
    if (!validate(id)) {
      throw new HttpException('Invalid id ', HttpStatus.BAD_REQUEST);
    }
    return this.intermediateIngredientService.update(id, data);
  }

  @Delete(':id')
  deleteIntermediateIngredient(@Param('id') id: string) {
    if (!validate(id)) {
      throw new HttpException('Invalid id ', HttpStatus.BAD_REQUEST);
    }
    return this.intermediateIngredientService.delete(id);
  }
}
