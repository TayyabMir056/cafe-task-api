import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MenuItemDTO } from './menu-item.dto';
import { MenuItemService } from './menu-item.service';

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
  addnewMenuItem(@Body() data: Partial<MenuItemDTO>) {
    return this.menuItemService.create(data);
  }

  @Put(':id')
  updateMenuItem(@Param('id') id: string, @Body() data: Partial<MenuItemDTO>) {
    return this.menuItemService.update(id, data);
  }

  @Delete(':id')
  deleteMenuItem(@Param('id') id: string) {
    return this.menuItemService.delete(id);
  }
}
