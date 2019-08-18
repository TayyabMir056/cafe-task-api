import { Injectable } from '@nestjs/common';
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
    return await this.inventoryRepository.find();
  }

  async create(data: Partial<InventoryIngredientDTO>) {
    const inventoryIngredient = this.inventoryRepository.create(data);
    await this.inventoryRepository.save(inventoryIngredient);
    return inventoryIngredient;
  }

  async read(id: string) {
    return await this.inventoryRepository.findOne({ id });
  }

  async update(id: string, data: Partial<InventoryIngredientDTO>) {
    await this.inventoryRepository.update({ id }, data);
    return await this.inventoryRepository.findOne({ id });
  }

  async destroy(id: string) {
    await this.inventoryRepository.delete({ id });
    return { deleted: true };
  }
}
