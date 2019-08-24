import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryIngredient } from './inventory-ingredient.entity';
import { Repository } from 'typeorm';
import { InventoryIngredientDTO } from './inventory-ingredient.dto';

@Injectable()
export class InventoryIngredientService {
  constructor(
    @InjectRepository(InventoryIngredient)
    private inventoryRepository: Repository<InventoryIngredient>,
  ) {}

  async showAll() {
    const inventoryIngredient = await this.inventoryRepository.find({
      relations: ['priceUnit'],
    });
    //If no inventory ingredients found in the database, 
    if (!inventoryIngredient) {
      throw new HttpException(
        'No inventory ingredients found',
        HttpStatus.NOT_FOUND,
      );
    }
    return inventoryIngredient;
  }

  async create(data: Partial<InventoryIngredientDTO>) {
    //Check if Already exists
    const inventoryIngredientExists = await this.inventoryRepository.findOne({
      name: data.name,
    });
    if (inventoryIngredientExists) {
      throw new HttpException(
        `Inventory Ingredient ${data.name} already exists`,
        HttpStatus.CONFLICT,
      );
    }
    const inventoryIngredient = await this.inventoryRepository.create(data);
    await this.inventoryRepository.save(inventoryIngredient);
    return inventoryIngredient;
  }

  async read(id: string) {
    const inventoryIngredient = await this.inventoryRepository.findOne({ id });
    //Check if it exists
    if (!inventoryIngredient) {
      throw new HttpException(
        'inventory ingredient does not exist',
        HttpStatus.NOT_FOUND,
      );
    }
    return inventoryIngredient;
  }

  async update(id: string, data: Partial<InventoryIngredientDTO>) {
    //Check if exists
    const inventoryIngredientExists = await this.inventoryRepository.findOne({
      id,
    });
    if (!inventoryIngredientExists) {
      throw new HttpException(
        'inventory ingredient does not exist',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.inventoryRepository.update({ id }, data);
    return await this.inventoryRepository.findOne({ id });
  }

  async destroy(id: string) {
    //Check if exists
    const inventoryIngredientExists = await this.inventoryRepository.findOne({
      id,
    });
    if (!inventoryIngredientExists) {
      throw new HttpException(
        'inventory ingredient does not exist',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.inventoryRepository.delete({ id });
    return { deleted: true };
  }
}
