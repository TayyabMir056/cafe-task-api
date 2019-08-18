import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PriceUnit } from './price-unit.entity';
import { PriceUnitController } from './price-unit.controller';
import { PriceUnitService } from './price-unit.service';

@Module({
  imports: [TypeOrmModule.forFeature([PriceUnit])],
  controllers: [PriceUnitController],
  providers: [PriceUnitService],
})
export class PriceUnitModule {}
