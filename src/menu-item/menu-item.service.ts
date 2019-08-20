import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuItem } from './menu-item.entity';
import { Repository } from 'typeorm';
import { MenuItemDTO } from './menu-item.dto';

@Injectable()
export class MenuItemService {
  constructor(
    @InjectRepository(MenuItem)
    private menuItemRepository: Repository<MenuItem>,
  ) {}

  async showAll() {
    const menuItem = await this.menuItemRepository.find({
      relations: ['category'],
    });
    if (!menuItem) {
      throw new HttpException('No menu item found', HttpStatus.NOT_FOUND);
    }
    return menuItem;
  }

  async read(id: string) {
    const menuItem = await this.menuItemRepository.findOne(
      { id },
      { relations: ['category'] },
    );
    if (!menuItem) {
      throw new HttpException('menu item not found', HttpStatus.NOT_FOUND);
    }
    return menuItem;
  }

  async create(data: Partial<MenuItemDTO>) {
    //Check if menu item already exists
    const menuItemExists = await this.menuItemRepository.findOne({
      name: data.name,
    });
    if (menuItemExists) {
      //console.log(menuItemExists);
      throw new HttpException('Menu Item Already exists', HttpStatus.CONFLICT);
    }
    //If not
    const menuItem = await this.menuItemRepository.create(data);
    await this.menuItemRepository.save(menuItem);
    return menuItem;
  }

  async update(id: string, data: Partial<MenuItem>) {
    //Check if menu item exists to update
    const menuItemExists = await this.menuItemRepository.findOne({ id });
    if (!menuItemExists) {
      throw new HttpException('Menu item does not exist', HttpStatus.NOT_FOUND);
    }
    await this.menuItemRepository.update({ id }, data);
    return this.menuItemRepository.findOne({ id });
  }

  async delete(id) {
    //Check if menu item exists to delete
    const menuItemExists = await this.menuItemRepository.findOne({ id });
    if (!menuItemExists) {
      throw new HttpException('Menu item does not exist', HttpStatus.NOT_FOUND);
    }

    await this.menuItemRepository.delete({ id });
    return { delete: true };
  }
}
