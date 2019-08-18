import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ADDRGETNETWORKPARAMS } from 'dns';
import { IntermediateIngredientService } from './intermediate-ingredient.service';
import { IntermediateIngredientDTO } from './intermediate-ingredient.dto';

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
    return this.intermediateIngredientService.read(id);
  }

  @Post()
  addNewIntermediateIngredient(
    @Body() data: Partial<IntermediateIngredientDTO>,
  ) {
    return this.intermediateIngredientService.create(data);
  }

  @Put(':id')
  updateIntermediateIngredient(
    @Param('id') id: string,
    @Body() data: Partial<IntermediateIngredientDTO>,
  ) {
    return this.intermediateIngredientService.update(id, data);
  }

  @Delete(':id')
  deleteIntermediateIngredient(@Param('id') id: string) {
    return this.intermediateIngredientService.delete(id);
  }
}
