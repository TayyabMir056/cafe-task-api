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
    const intermediateIngredient = await this.intermediateIngredientRepository.find();
    // if (!intermediateIngredient) {
    //   throw new HttpException('No items found', HttpStatus.NOT_FOUND);
    // }
    return intermediateIngredient;
  }

  async read(id: string) {
    const intermediateIngredient = await this.intermediateIngredientRepository.findOne(
      { id },
      { relations: ['priceUnit'] },
    );
    //If the provided id not found in the database, throw NOT_FOUND Exception
    if (!intermediateIngredient) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return intermediateIngredient;
  }

  async create(data: Partial<IntermediateIngredientDTO>) {
    //Check if it already doesnot exist
    const intermediateIngredientExists = await this.intermediateIngredientRepository.findOne(
      { where: { name: data.name } },
    );
    if (intermediateIngredientExists) {
      //Throw exception if the name already exists in the database.. Name can not be duplicated
      throw new HttpException(
        `Intermediate ingredient ${data.name} already exists`,
        HttpStatus.CONFLICT,
      );
    }
    //If not duplicate, create the repository item and save it
    const intermediateIngredient = await this.intermediateIngredientRepository.create(
      data,
    );
    intermediateIngredient['cost'] = -1; // Default value when recipe is not set.. It will be updated when its recipe is created or updated
    await this.intermediateIngredientRepository.save(intermediateIngredient);
    return intermediateIngredient;
  }

  async update(id: string, data: Partial<IntermediateIngredientDTO>) {
    //First check if the intermediate ingredient id exists in the database
    const intermediateIngredient = await this.intermediateIngredientRepository.findOne(
      { id },
    );
    //Throw exception if provided id is not found
    if (!intermediateIngredient) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.intermediateIngredientRepository.update({ id }, data);
    return this.read(id);
  }

  async delete(id: string) {
    //First check if if exists in the database
    const intermediateIngredient = await this.intermediateIngredientRepository.findOne(
      { id },
    );
    //Throw exception if id not found
    if (!intermediateIngredient) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    await this.intermediateIngredientRepository.delete({ id });
    return { deleted: true };
  }
}
