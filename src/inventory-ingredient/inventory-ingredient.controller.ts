import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { InventoryIngredientService } from './inventory-ingredient.service';
import { InventoryIngredientDTO } from './inventory-ingredient.dto';

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
  addIngredient(@Body() data: Partial<InventoryIngredientDTO>) {
    return this.inventoryIngredientService.create(data);
  }

  @Put(':id')
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
