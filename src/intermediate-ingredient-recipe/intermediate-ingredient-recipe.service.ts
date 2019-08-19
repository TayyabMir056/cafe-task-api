import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IntermediateIngredientRecipe } from './intermediate-ingredient-recipe.entity';
import { Repository } from 'typeorm';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
import { IntermediateIngredientRecipeDTO } from './intermediate-ingredient-recipe.dto';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';

@Injectable()
export class IntermediateIngredientRecipeService {
  constructor(
    @InjectRepository(IntermediateIngredientRecipe)
    private intermediateIngredientRecipeRespository: Repository<
      IntermediateIngredientRecipe
    >,
    @InjectRepository(IntermediateIngredient)
    private intermediateIngredientRespository: Repository<
      IntermediateIngredient
    >,
  ) {}

  async getAll() {
    return await this.intermediateIngredientRecipeRespository.find({
      relations: ['intermediateIngredient', 'inventoryIngredient'],
    });
  }

  async getRecipeByIntermediateIngredient(
    intermediateIngredient: Partial<IntermediateIngredient>,
  ) {
    let intermediateIngredientRecipe = await this.intermediateIngredientRecipeRespository.find(
      {
        join: {
          alias: 'intermediateIngredientRecipe',
          leftJoinAndSelect: {
            InventoryIngredient:
              'intermediateIngredientRecipe.inventoryIngredient',
            IntermediateIngredient:
              'intermediateIngredientRecipe.intermediateIngredient',
          },
        },
        where: { intermediateIngredient: intermediateIngredient },
      },
    );

    let recipe = [];
    await intermediateIngredientRecipe.forEach(recipeItem => {
      recipe.push({
        inventoryIngredient: recipeItem.inventoryIngredient.id,
        inventoryIngredient_name: recipeItem.inventoryIngredient.name,
        inventoryIngredient_cost: recipeItem.inventoryIngredient.cost,
        quantity: recipeItem.quantity,
      });
    });

    return {
      intermediateIngredient: intermediateIngredient.id,
      recipe: recipe,
    };
  }

  async createRecipeForIntermediateIngredient(
    intermediateIngredientRecipe: IntermediateIngredientRecipeDTO,
  ) {
    intermediateIngredientRecipe.inventoryIngredientQuantities.forEach(
      inventoryItemQuantity => {
        let data = {
          intermediateIngredient:
            intermediateIngredientRecipe.intermediateIngredient,
          inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
          quantity: inventoryItemQuantity.quantity,
        };

        var itermediateIngredientRecipeItem = this.intermediateIngredientRecipeRespository.create(
          data,
        );
        this.intermediateIngredientRecipeRespository.save(
          itermediateIngredientRecipeItem,
        );
      },
    );
    this.updateIntermediateIngredientCost(
      intermediateIngredientRecipe.intermediateIngredient,
    );
    return {
      recipeAddedForId: intermediateIngredientRecipe.intermediateIngredient,
    };
  }

  async updateIntermediateIngredientRecipe(
    intermediateIngredient_id: string,
    data: IntermediateIngredientRecipeDTO,
  ) {
    data.inventoryIngredientQuantities.forEach(inventoryItemQuantity => {
      this.intermediateIngredientRecipeRespository.update(
        {
          intermediateIngredient: { id: intermediateIngredient_id },
          inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
        },
        { quantity: inventoryItemQuantity.quantity },
      );
    });
    this.updateIntermediateIngredientCost(data.intermediateIngredient);
    return this.getRecipeByIntermediateIngredient(data.intermediateIngredient);
  }

  async deleteIntermediateIngredientRecipe(id: string) {
    await this.intermediateIngredientRecipeRespository.delete({
      id,
    });
    return { deleted: true };
  }

  async updateIntermediateIngredientCost(
    intermediateIngredient: IntermediateIngredient,
  ) {
    let recipe = await this.getRecipeByIntermediateIngredient(
      intermediateIngredient,
    );
    let cost = 0;
    await recipe.recipe.forEach(recipeItem => {
      cost =
        cost + recipeItem['inventoryIngredient_cost'] * recipeItem['quantity'];
    });
    this.intermediateIngredientRespository.update(intermediateIngredient, {
      cost,
    });
  }
}
