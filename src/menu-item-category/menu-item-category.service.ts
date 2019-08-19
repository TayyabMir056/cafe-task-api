import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MenuItemCategoryDTO } from './menu-item-category.dto';
import { MenuItemCategory } from './menu-item-category.entity';

@Injectable()
export class MenuItemCategoryService {
  constructor(
    @InjectRepository(MenuItemCategory)
    private categoryRepository: Repository<MenuItemCategory>,
  ) {}

  async showAll() {
    const menuItemCategory = await this.categoryRepository.find();
    if (!menuItemCategory) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return menuItemCategory;
  }

  async create(data: Partial<MenuItemCategoryDTO>) {
    const menuItemCategory = await this.categoryRepository.create(data);
    await this.categoryRepository.save(menuItemCategory);
    return data;
  }

  async read(id: string) {
    const menuItemCategory = await this.categoryRepository.findOne(id);
    if (!menuItemCategory) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return menuItemCategory;
  }

  async update(id: string, data: Partial<MenuItemCategoryDTO>) {
    const menuItemCategory = await this.categoryRepository.findOne({ id });
    if (!menuItemCategory) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.categoryRepository.update(id, data);
    return await this.categoryRepository.findOne(id);
  }
  async destroy(id: string) {
    const menuItemCategory = await this.categoryRepository.findOne({ id });
    if (!menuItemCategory) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.categoryRepository.delete(id);
    return { deleted: true };
  }
}
