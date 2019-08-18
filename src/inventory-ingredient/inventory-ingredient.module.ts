import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InventoryIngredient } from './inventory-ingredient.entity';
import { InventoryIngredientController } from './inventory-ingredient.controller';
import { InventoryIngredientService } from './inventory-ingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryIngredient])],
  controllers: [InventoryIngredientController],
  providers: [InventoryIngredientService],
})
export class InventoryIngredientModule {}
