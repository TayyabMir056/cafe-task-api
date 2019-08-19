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
import { InventoryIngredientService } from './inventory-ingredient.service';
import { InventoryIngredientDTO } from './inventory-ingredient.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('inventory_ing')
export class InventoryIngredientController {
  constructor(private inventoryIngredientService: InventoryIngredientService) {}

  @Get()
  getAllIngredients() {
    return this.inventoryIngredientService.showAll();
  }

  @Get(':id')
  gerIngredientById(@Param('id') id: string) {
    return this.inventoryIngredientService.read(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addIngredient(@Body() data: Partial<InventoryIngredientDTO>) {
    return this.inventoryIngredientService.create(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateIngredient(
    @Param('id') id: string,
    @Body() data: Partial<InventoryIngredientDTO>,
  ) {
    return this.inventoryIngredientService.update(id, data);
  }

  @Delete(':id')
  deleteIngredient(@Param('id') id: string) {
    return this.inventoryIngredientService.destroy(id);
  }
}
