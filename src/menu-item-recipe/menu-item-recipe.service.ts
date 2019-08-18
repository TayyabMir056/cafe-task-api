import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { MenuItemRecipe } from './menu-item-recipe.entity';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
import { MenuItem } from 'src/menu-item/menu-item.entity';
import { InventoryIngredient } from 'src/inventory-ingredient/inventory-ingredient.entity';
import { IngredientType } from 'src/IngredientType/IngredientType.enum';

@Injectable()
export class MenuItemRecipeService {
  constructor(
    @InjectRepository(MenuItemRecipe)
    private menuItemRecipeRepository: Repository<MenuItemRecipe>,
  ) {}

  async getAll() {
    return await this.menuItemRecipeRepository.find({
      relations: ['menuItem', 'intermediateIngredient', 'inventoryIngredient'],
    });
  }
  async readById(menuItem: Partial<MenuItem>) {
    return await this.menuItemRecipeRepository.find({
      join: {
        alias: 'menuItemRecipe',
        leftJoinAndSelect: {
          MenuItem: 'menuItemRecipe.menuItem',
          IntermediateIngredient: 'menuItemRecipe.intermediateIngredient',
          InventoryIngredient: 'menuItemRecipe.inventoryIngredient',
        },
      },
      where: { menuItem: menuItem },
    });
  }

  async createMenuItemRecipe(data: MenuItemRecipeDTO) {
    await data.recipe.forEach(ingredient => {
      let menuItemRecipe = this.menuItemRecipeRepository.create({
        menuItem: data.menuItem,
        intermediateIngredient: ingredient.intermediateIngredient,
        inventoryIngredient: ingredient.inventoryIngredient,
        ingredientType: ingredient.ingredientType,
        quantity: ingredient.quantity,
      });
      this.menuItemRecipeRepository.save(menuItemRecipe);
    });
    return this.readById(data.menuItem);
  }

  async updateMenuItemRecipe(data: MenuItemRecipeDTO) {
    await data.recipe.forEach(async ingredient => {
      let existingRecipe = await this.menuItemRecipeRepository.findOne({
        menuItem: data.menuItem,
        intermediateIngredient: ingredient.intermediateIngredient,
        inventoryIngredient: ingredient.inventoryIngredient,
        ingredientType: ingredient.ingredientType,
      });
      console.log(existingRecipe);
      if (existingRecipe) {
        //If recipe item already exists then update
        this.menuItemRecipeRepository.update(
          {
            menuItem: data.menuItem,
            intermediateIngredient: ingredient.intermediateIngredient,
            inventoryIngredient: ingredient.inventoryIngredient,
            ingredientType: ingredient.ingredientType,
          },
          {
            quantity: ingredient.quantity,
          },
        );
      } // If recipe item doesnot exist, create new
      else {
        let menuItemRecipe = this.menuItemRecipeRepository.create({
          menuItem: data.menuItem,
          intermediateIngredient: ingredient.intermediateIngredient,
          inventoryIngredient: ingredient.inventoryIngredient,
          ingredientType: ingredient.ingredientType,
          quantity: ingredient.quantity,
        });
        this.menuItemRecipeRepository.save(menuItemRecipe);
      }
    });
    return this.readById(data.menuItem);
  }
}
