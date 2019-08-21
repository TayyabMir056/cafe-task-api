import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    @InjectRepository(InventoryIngredient)
    private inventoryIngredientRepository: Repository<InventoryIngredient>,
  ) {}

  async getAll() {
    const intermediateIngRecipe = await this.intermediateIngredientRecipeRespository.find(
      {
        relations: ['intermediateIngredient', 'inventoryIngredient'],
      },
    );
    //if no recipes are found in the database
    if (!intermediateIngRecipe.length) {
      throw new HttpException('no recipe found', HttpStatus.NOT_FOUND);
    }
    return intermediateIngRecipe;
  }

  async getRecipeByIntermediateIngredient(
    intermediateIngredient: Partial<IntermediateIngredient>,
  ) {
    //first check if intermediate ingredient exists in the database
    const intermediateIngredientExists = await this.intermediateIngredientRespository.findOne(
      { id: intermediateIngredient.id },
    );
    if (!intermediateIngredientExists) {
      throw new HttpException(
        'intermediate ingredient not found',
        HttpStatus.NOT_FOUND,
      );
    }

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
    //If no recipe found for the provided intermediate ingredient
    if (!intermediateIngredientRecipe) {
      throw new HttpException('Recipe not found', HttpStatus.NOT_FOUND);
    }
    //If recipe items are found, loop through them and push them in the recipe[] array
    let recipe = [];
    await intermediateIngredientRecipe.forEach(recipeItem => {
      recipe.push({
        id: recipeItem.id,
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
    //First Check if intermediate ingredient exists for which the recipe is being created

    const intermediateIngredienExists = await this.intermediateIngredientRespository.findOne(
      { id: intermediateIngredientRecipe.intermediateIngredient.id },
    );
    if (!intermediateIngredienExists) {
      throw new HttpException(
        'intermediate ingredient does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    intermediateIngredientRecipe.recipe.forEach(inventoryItemQuantity => {
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
    });
    //Update the cost for the intermediate ingredient
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
    //First check intermediate ingredient exists for which the recipe is being created
    const intermediateIngredientExists = this.intermediateIngredientRespository.findOne(
      { id: intermediateIngredient_id },
    );
    if (!intermediateIngredientExists) {
      throw new HttpException(
        'intermediate ingredient does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    data.recipe.forEach(async inventoryItemQuantity => {
      //If within the loop, an inventory ingredient does not exist, skip that and update rest
      const inventoryIngredientExists = await this.inventoryIngredientRepository.findOne(
        { id: inventoryItemQuantity.inventoryIngredient.id },
      );
      if (inventoryIngredientExists) {
        //if inventory item actually exists, if not, it will be skipped
        this.intermediateIngredientRecipeRespository.update(
          {
            intermediateIngredient: { id: intermediateIngredient_id },
            inventoryIngredient: inventoryItemQuantity.inventoryIngredient,
          },
          { quantity: inventoryItemQuantity.quantity },
        );
      }
    });
    //Update cost of the intermediate ingredient
    this.updateIntermediateIngredientCost(data.intermediateIngredient);
    return this.getRecipeByIntermediateIngredient(data.intermediateIngredient);
  }

  async deleteIntermediateIngredientRecipe(id: string) {
    //Check if it exists
    const intermediateIngRecipe = this.intermediateIngredientRecipeRespository.findOne(
      { id },
    );
    if (!intermediateIngRecipe) {
      throw new HttpException('item id not found', HttpStatus.NOT_FOUND);
    }
    await this.intermediateIngredientRecipeRespository.delete({
      id,
    });
    return { deleted: true };
  }

  //intermediate ingredients's cost has to be updated everytime its recipe is created or updated
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

    return { updated: intermediateIngredient.id };
  }
}
