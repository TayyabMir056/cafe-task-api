import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IntermediateIngredient } from './intermediate-ingredient.entity';
import { IntermediateIngredientDTO } from './intermediate-ingredient.dto';

@Injectable()
export class IntermediateIngredientService {
  constructor(
    @InjectRepository(IntermediateIngredient)
    private intermediateIngredientRepository: Repository<
      IntermediateIngredient
    >,
  ) {}

  async getAll() {
    return await this.intermediateIngredientRepository.find({
      relations: ['priceUnit'],
    });
  }

  async read(id: string) {
    return await this.intermediateIngredientRepository.findOne(
      { id },
      { relations: ['priceUnit'] },
    );
  }

  async create(data: Partial<IntermediateIngredientDTO>) {
    const intermediateIngredient = this.intermediateIngredientRepository.create(
      data,
    );
    intermediateIngredient['cost'] = -1; // Default value when recipe is not set
    await this.intermediateIngredientRepository.save(intermediateIngredient);
    return intermediateIngredient;
  }

  async update(id: string, data: Partial<IntermediateIngredientDTO>) {
    await this.intermediateIngredientRepository.update({ id }, data);
    return this.read(id);
  }

  async delete(id: string) {
    await this.intermediateIngredientRepository.delete({ id });
    return { deleted: true };
  }
}
