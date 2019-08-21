import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { MenuItemRecipe } from './menu-item-recipe.entity';
import { MenuItemRecipeDTO } from './menu-item-recipe.dto';
import { MenuItem } from '../menu-item/menu-item.entity';
import { IngredientType } from 'src/IngredientType/IngredientType.enum';
import { InventoryIngredient } from 'src/inventory-ingredient/inventory-ingredient.entity';

@Injectable()
export class MenuItemRecipeService {
  constructor(
    @InjectRepository(MenuItemRecipe)
    private menuItemRecipeRepository: Repository<MenuItemRecipe>,
    @InjectRepository(MenuItem)
    private menuItemRepository: Repository<MenuItem>,
  ) {}

  async getAll() {
    const menuItemRecipe = await this.menuItemRecipeRepository.find({
      relations: ['menuItem', 'intermediateIngredient', 'inventoryIngredient'],
    });
    if (!menuItemRecipe.length) {
      throw new HttpException('No recipes found', HttpStatus.NOT_FOUND);
    }
    return menuItemRecipe;
  }
  async readById(menuItem: Partial<MenuItem>) {
    //Check if menuItem exists in the database
    const menuItemExists = this.menuItemRepository.findOne({ id: menuItem.id });
    if (!menuItemExists) {
      throw new HttpException('Menu Item not found!', HttpStatus.NOT_FOUND);
    }

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

    //If recipe is not found, throw exception
    // if (!menuItemRecipe.length) {
    //   throw new HttpException('Recipe not found!', HttpStatus.NOT_FOUND);
    // }

    //If Recipe is found, loop through the items and add in recipe[] a
    let recipe = [];
    await menuItemRecipe.forEach(async recipeItem => {
      await recipe.push({
        id: recipeItem.id,
        ingredient:
          recipeItem.ingredientType == IngredientType.Intermediate
            ? recipeItem.intermediateIngredient.id
            : recipeItem.inventoryIngredient.id,
        ingredientName:
          recipeItem.ingredientType == IngredientType.Inventory
            ? recipeItem.inventoryIngredient.name
            : recipeItem.intermediateIngredient.name,
        ingredientType:
          recipeItem.ingredientType == IngredientType.Inventory
            ? 'Inventory Ingredient'
            : 'Intermediate Ingredient',
        quantity: recipeItem.quantity,
        ingredientCost:
          recipeItem.ingredientType == IngredientType.Inventory
            ? recipeItem.inventoryIngredient.cost
            : recipeItem.intermediateIngredient.cost,
      });
    });

    return {
      menuItem: menuItem,
      recipe: recipe,
    };
  }

  async createMenuItemRecipe(data: Partial<MenuItemRecipeDTO>) {
    //UpdateMenuItemRecipe creates new item if not exists.. so why not use the same function?
    return await this.updateMenuItemRecipe(data);
  }

  async updateMenuItemRecipe(data: Partial<MenuItemRecipeDTO>) {
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
        await this.menuItemRecipeRepository.update(
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
        let menuItemRecipe = await this.menuItemRecipeRepository.create({
          menuItem: data.menuItem,
          intermediateIngredient: ingredient.intermediateIngredient,
          inventoryIngredient: ingredient.inventoryIngredient,
          ingredientType: ingredient.ingredientType,
          quantity: ingredient.quantity,
        });
        await this.menuItemRecipeRepository.save(menuItemRecipe);
      }
    });
    await this.updateMenuItemCost(data.menuItem); //Update Menu Item cost after calculating from the recipe
    return await this.readById(data.menuItem);
  }

  async delete(id: string) {
    //Check if id exists in the database
    const recipeItemExists = await this.menuItemRecipeRepository.findOne({
      id,
    });
    if (!recipeItemExists) {
      throw new HttpException('item not found', HttpStatus.NOT_FOUND);
    }
    await this.menuItemRecipeRepository.delete({ id });
    return { deleted: true };
  }

  async updateMenuItemCost(menuItem: Partial<MenuItem>) {
    let recipe = await this.readById(menuItem);
    let cost = 0;
    await recipe.recipe.forEach(recipeItem => {
      cost = cost + recipeItem['ingredientCost'] * recipeItem['quantity'];
    });
    await this.menuItemRepository.update(menuItem, { cost });
  }
}
