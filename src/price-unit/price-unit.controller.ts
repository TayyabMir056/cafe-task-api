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

import { PriceUnitService } from './price-unit.service';
import { PriceUnitDTO } from './price-unit.dto';
import { ValidationPipe } from '../shared/validation.pipe';
var validate = require('uuid-validate');

@Controller('units')
export class PriceUnitController {
  constructor(private priceUnitService: PriceUnitService) {}

  @Get()
  getAllPriceUnits() {
    return this.priceUnitService.showAll();
  }

  @Get(':id')
  getUnitById(@Param('id') id: string) {
    if (!validate(id)) {
      //If Id is not valid then throw exception
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.priceUnitService.read(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createPriceUnit(@Body() data: Partial<PriceUnitDTO>) {
    return this.priceUnitService.create(data);
  }

  @Put(':id')
  updatePriceUnit(
    @Param('id') id: string,
    @Body() data: Partial<PriceUnitDTO>,
  ) {
    if (!validate(id)) {
      //If Id is not valid then throw exception
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.priceUnitService.update(id, data);
  }

  @Delete(':id')
  deletePriceUnit(@Param('id') id: string) {
    if (!validate(id)) {
      //If Id is not valid then throw exception
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.priceUnitService.destroy(id);
  }
}
