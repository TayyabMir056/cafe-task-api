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
import { MenuItemDTO } from './menu-item.dto';
import { MenuItemService } from './menu-item.service';
import { ValidationPipe } from '../shared/validation.pipe';
var validate = require('uuid-validate');

@Controller('menu-item')
export class MenuItemController {
  constructor(private menuItemService: MenuItemService) {}

  @Get()
  getAllMenuITems() {
    return this.menuItemService.showAll();
  }

  @Get(':id')
  getMenuItemById(@Param('id') id: string) {
    if (!validate(id)) {
      //If Id is not valid then throw exception
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.menuItemService.read(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addnewMenuItem(@Body() data: Partial<MenuItemDTO>) {
    return this.menuItemService.create(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateMenuItem(@Param('id') id: string, @Body() data: Partial<MenuItemDTO>) {
    if (!validate(id)) {
      //If Id is not valid then throw exception
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.menuItemService.update(id, data);
  }

  @Delete(':id')
  deleteMenuItem(@Param('id') id: string) {
    if (!validate(id)) {
      //If Id is not valid then throw exception
      throw new HttpException('Not Valid id', HttpStatus.BAD_REQUEST);
    }
    return this.menuItemService.delete(id);
  }
}
