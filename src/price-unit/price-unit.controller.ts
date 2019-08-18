import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { PriceUnitService } from './price-unit.service';
import { PriceUnitDTO } from './price-unit.dto';

@Controller('unit')
export class PriceUnitController {
  constructor(private priceUnitService: PriceUnitService) {}

  @Get()
  getAllPriceUnits() {
    return this.priceUnitService.showAll();
  }

  @Get(':id')
  getUnitById(@Param('id') id: string) {
    return this.priceUnitService.read(id);
  }

  @Post()
  createPriceUnit(@Body() data: Partial<PriceUnitDTO>) {
    return this.priceUnitService.create(data);
  }

  @Put(':id')
  updatePriceUnit(
    @Param('id') id: string,
    @Body() data: Partial<PriceUnitDTO>,
  ) {
    return this.priceUnitService.update(id, data);
  }

  @Delete(':id')
  deletePriceUnit(@Param('id') id: string) {
    return this.priceUnitService.destroy(id);
  }
}
