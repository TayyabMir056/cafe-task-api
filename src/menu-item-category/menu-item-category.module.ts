import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuItemCategory } from './menu-item-category.entity';
import { MenuItemCategoryController } from './menu-item-category.controller';
import { MenuItemCategoryService } from './menu-item-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItemCategory])],
  controllers: [MenuItemCategoryController],
  providers: [MenuItemCategoryService],
})
export class MenuItemCategoryModule {}
