import { Injectable } from '@nestjs/common';
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
    return await this.menuItemRepository.find({ relations: ['category'] });
  }

  async read(id: string) {
    return await this.menuItemRepository.findOne(
      { id },
      { relations: ['category'] },
    );
  }

  async create(data: Partial<MenuItemDTO>) {
    const menuItem = this.menuItemRepository.create(data);
    await this.menuItemRepository.save(menuItem);
    return menuItem;
  }

  async update(id: string, data: Partial<MenuItem>) {
    await this.menuItemRepository.update({ id }, data);
    return this.menuItemRepository.findOne({ id });
  }

  async delete(id) {
    await this.menuItemRepository.delete({ id });
    return { delete: true };
  }
}
