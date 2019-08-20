import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    const intermediateIngredient = await this.intermediateIngredientRepository.find(
      {
        relations: ['priceUnit'],
      },
    );
    if (!intermediateIngredient) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return intermediateIngredient;
  }

  async read(id: string) {
    const intermediateIngredient = await this.intermediateIngredientRepository.findOne(
      { id },
      { relations: ['priceUnit'] },
    );
    if (!intermediateIngredient) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return intermediateIngredient;
  }

  async create(data: Partial<IntermediateIngredientDTO>) {
    //Check if it already doesnot exist

    const intermediateIngredientExists = this.intermediateIngredientRepository.findOne(
      { name: data.name },
    );
    if (intermediateIngredientExists) {
      throw new HttpException(
        `Intermediate ingredient ${data.name} already exists`,
        HttpStatus.CONFLICT,
      );
    }
    const intermediateIngredient = await this.intermediateIngredientRepository.create(
      data,
    );
    intermediateIngredient['cost'] = -1; // Default value when recipe is not set
    await this.intermediateIngredientRepository.save(intermediateIngredient);
    return intermediateIngredient;
  }

  async update(id: string, data: Partial<IntermediateIngredientDTO>) {
    const intermediateIngredient = await this.intermediateIngredientRepository.findOne(
      { id },
    );
    if (!intermediateIngredient) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.intermediateIngredientRepository.update({ id }, data);
    return this.read(id);
  }

  async delete(id: string) {
    const intermediateIngredient = await this.intermediateIngredientRepository.findOne(
      { id },
    );
    if (!intermediateIngredient) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.intermediateIngredientRepository.delete({ id });
    return { deleted: true };
  }
}
