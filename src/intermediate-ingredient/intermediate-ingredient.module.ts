import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { IntermediateIngredient } from './intermediate-ingredient.entity';
import { IntermediateIngredientController } from './intermediate-ingredient.controller';
import { IntermediateIngredientService } from './intermediate-ingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([IntermediateIngredient])],
  controllers: [IntermediateIngredientController],
  providers: [IntermediateIngredientService],
})
export class IntermediateIngredientModule {}
