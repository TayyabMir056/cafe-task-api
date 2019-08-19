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
import { MenuItemDTO } from './menu-item.dto';
import { MenuItemService } from './menu-item.service';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('menu-item')
export class MenuItemController {
  constructor(private menuItemService: MenuItemService) {}

  @Get()
  getAllMenuITems() {
    return this.menuItemService.showAll();
  }

  @Get(':id')
  getMenuItemById(@Param('id') id: string) {
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
    return this.menuItemService.update(id, data);
  }

  @Delete(':id')
  deleteMenuItem(@Param('id') id: string) {
    return this.menuItemService.delete(id);
  }
}
