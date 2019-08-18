import { Injectable } from '@nestjs/common';
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
    return await this.categoryRepository.find();
  }

  async create(data: Partial<MenuItemCategoryDTO>) {
    const menuItemCategory = await this.categoryRepository.create(data);
    await this.categoryRepository.save(menuItemCategory);
    return data;
  }

  async read(id: number) {
    return await this.categoryRepository.findOne(id);
  }

  async update(id: string, data: Partial<MenuItemCategoryDTO>) {
    await this.categoryRepository.update(id, data);
    return await this.categoryRepository.findOne(id);
  }
  async destroy(id: string) {
    await this.categoryRepository.delete(id);
    return { deleted: true };
  }
}
