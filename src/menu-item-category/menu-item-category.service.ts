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
    //If no categories found in the database
    if (!menuItemCategory) {
      throw new HttpException('No categories found', HttpStatus.NOT_FOUND);
    }
    return menuItemCategory;
  }

  async create(data: Partial<MenuItemCategoryDTO>) {
    //first check if the name already exists.. name can not be duplicated
    const categoryExists = await this.categoryRepository.findOne({
      name: data.name,
    });
    //throw exception if name exists
    if (categoryExists) {
      throw new HttpException('category already exists', HttpStatus.CONFLICT);
    }
    const menuItemCategory = await this.categoryRepository.create(data);
    await this.categoryRepository.save(menuItemCategory);
    return data;
  }

  async read(id: string) {
    const menuItemCategory = await this.categoryRepository.findOne(id);
    //if category id does not exist in the database, throw exception
    if (!menuItemCategory) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return menuItemCategory;
  }

  async update(id: string, data: Partial<MenuItemCategoryDTO>) {
    //first check if the provided id exists in the database
    const menuItemCategory = await this.categoryRepository.findOne({ id });
    if (!menuItemCategory) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    //if the id is valid (exists), then update the info
    await this.categoryRepository.update(id, data);
    return await this.categoryRepository.findOne(id);
  }
  async destroy(id: string) {
    //first check if the provided id exists in the database

    const menuItemCategory = await this.categoryRepository.findOne({ id });
    if (!menuItemCategory) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.categoryRepository.delete(id);
    return { deleted: true };
  }
}
