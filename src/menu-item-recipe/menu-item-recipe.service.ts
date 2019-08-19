import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { MenuItemRecipe } from './menu-item-recipe.entity';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
import { MenuItem } from '../menu-item/menu-item.entity';

@Injectable()
export class MenuItemRecipeService {
  constructor(
    @InjectRepository(MenuItemRecipe)
    private menuItemRecipeRepository: Repository<MenuItemRecipe>,
    @InjectRepository(MenuItem)
    private menuItemRepository: Repository<MenuItem>,
  ) {}

  async getAll() {
    return await this.menuItemRecipeRepository.find({
      relations: ['menuItem', 'intermediateIngredient', 'inventoryIngredient'],
    });
  }
  async readById(menuItem: Partial<MenuItem>) {
    let menuItemRecipe = await this.menuItemRecipeRepository.find({
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

    let recipe = [];
    menuItemRecipe.forEach(recipeItem => {
      recipe.push({
        ingredient:
          recipeItem.ingredientType == 2
            ? recipeItem.intermediateIngredient.id
            : recipeItem.inventoryIngredient.id,
        ingredientName:
          recipeItem.ingredientType == 1
            ? recipeItem.inventoryIngredient.name
            : recipeItem.intermediateIngredient.name,
        ingredientType:
          recipeItem.ingredientType == 1
            ? 'Inventory Ingredient'
            : 'Intermediate Ingredient',
        quantity: recipeItem.quantity,
        ingredientCost:
          recipeItem.ingredientType == 1
            ? recipeItem.inventoryIngredient.cost
            : recipeItem.intermediateIngredient.cost,
      });
    });

    return {
      menuItem: menuItem,
      recipe: recipe,
    };
  }

  async createMenuItemRecipe(data: MenuItemRecipeDTO) {
    return this.updateMenuItemRecipe(data);
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
    this.updateMenuItemCost(data.menuItem); //Update Menu Item cost after calculating from the recipe
    return this.readById(data.menuItem);
  }

  async delete(id: string) {
    await this.menuItemRecipeRepository.delete({ id });
    return { deleted: true };
  }

  async updateMenuItemCost(menuItem: Partial<MenuItem>) {
    let recipe = await this.readById(menuItem);
    console.log('Updating cost...');
    console.log(recipe);
    let cost = 0;

    await recipe.recipe.forEach(recipeItem => {
      cost = cost + recipeItem['ingredientCost'] * recipeItem['quantity'];
    });

    await this.menuItemRepository.update(menuItem, { cost });
  }
}
