import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { MenuItemCategoryService } from './menu-item-category.service';
import { MenuItemCategoryDTO } from './menu-item-category.dto';

@Controller('category')
export class MenuItemCategoryController {
  constructor(private menuItemCategoryService: MenuItemCategoryService) {}
  @Get()
  getAllCategories() {
    return this.menuItemCategoryService.showAll();
  }

  @Post()
  addNewCategory(@Body() data: MenuItemCategoryDTO) {
    return this.menuItemCategoryService.create(data);
  }

  @Get(':id')
  getCategoryById(@Param('id') id: number) {
    return this.menuItemCategoryService.read(id);
  }

  @Put(':id')
  updateCategory(
    @Param('id') id: string,
    @Body() data: Partial<MenuItemCategoryDTO>,
  ) {
    return this.menuItemCategoryService.update(id, data);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.menuItemCategoryService.destroy(id);
  }
}
