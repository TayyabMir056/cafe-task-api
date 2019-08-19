import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuItemRecipeController } from './menu-item-recipe.controller';
import { MenuItemRecipeService } from './menu-item-recipe.service';
import { MenuItemRecipe } from './menu-item-recipe.entity';
import { MenuItem } from '../menu-item/menu-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItemRecipe, MenuItem])],
  controllers: [MenuItemRecipeController],
  providers: [MenuItemRecipeService],
})
export class MenuItemRecipeModule {}
