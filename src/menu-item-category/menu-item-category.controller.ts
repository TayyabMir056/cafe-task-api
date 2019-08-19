import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { ValidationPipe } from '../shared/validation.pipe';
import { MenuItemCategoryService } from './menu-item-category.service';
import { MenuItemCategoryDTO } from './menu-item-category.dto';
var validate = require('uuid-validate');
@Controller('categories')
export class MenuItemCategoryController {
  constructor(private menuItemCategoryService: MenuItemCategoryService) {}
  @Get()
  getAllCategories() {
    return this.menuItemCategoryService.showAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addNewCategory(@Body() data: Partial<MenuItemCategoryDTO>) {
    return this.menuItemCategoryService.create(data);
  }

  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    if (!validate(id)) {
      //If Id is not valid then throw exceptio
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.menuItemCategoryService.read(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateCategory(
    @Param('id') id: string,
    @Body() data: Partial<MenuItemCategoryDTO>,
  ) {
    if (!validate(id)) {
      //If Id is not valid then throw exception
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.menuItemCategoryService.update(id, data);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    if (!validate(id)) {
      //If Id is not valid then throw exception
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.menuItemCategoryService.destroy(id);
  }
}
