import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { MenuItemRecipeService } from './menu-item-recipe.service';
import { UpdateDateColumn } from 'typeorm';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';

@Controller('menu-item-recipe')
export class MenuItemRecipeController {
  constructor(private menuItemRecipeService: MenuItemRecipeService) {}

  @Get()
  getAllMenuItemRecipes() {
    return this.menuItemRecipeService.getAll();
  }

  @Get(':menuItem_id')
  getMenuItemRecipeById(@Param('menuItem_id') menuItem_id: string) {
    return this.menuItemRecipeService.readById({ id: menuItem_id });
  }

  @Post()
  addnewMenuItemRecipe(@Body() data: MenuItemRecipeDTO) {
    return this.menuItemRecipeService.createMenuItemRecipe(data);
  }

  @Put()
  updateMenuItemRecipe(@Body() data: MenuItemRecipeDTO) {
    return this.menuItemRecipeService.updateMenuItemRecipe(data);
  }

  @Delete()
  deleteMenuItemRecipe() {}
}
