import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PriceUnit } from './price-unit.entity';
import { PriceUnitDTO } from './price-unit.dto';
var validate = require('uuid-validate');

@Injectable()
export class PriceUnitService {
  constructor(
    @InjectRepository(PriceUnit)
    private priceUnitRepository: Repository<PriceUnit>,
  ) {}

  async showAll() {
    return await this.priceUnitRepository.find();
  }

  async create(data: Partial<PriceUnitDTO>) {
    const priceUnitExists = await this.priceUnitRepository.findOne({
      where: { name: data.name },
    });
    if (priceUnitExists) {
      throw new HttpException(
        `Price unit '${data.name}' already exists`,
        HttpStatus.CONFLICT,
      );
    }
    const priceUnit = await this.priceUnitRepository.create(data);
    await this.priceUnitRepository.save(priceUnit);
    return priceUnit;
  }

  async read(id: string) {
    const priceUnit = await this.priceUnitRepository.findOne({ id });
    if (!priceUnit) {
      //If Not found
      throw new HttpException('Price unit not found', HttpStatus.NOT_FOUND);
    }
    return priceUnit;
  }

  async update(id: string, data: Partial<PriceUnitDTO>) {
    const priceUnit = await this.priceUnitRepository.findOne(id);
    if (!priceUnit) {
      throw new HttpException('id not found', HttpStatus.NOT_FOUND);
    }
    await this.priceUnitRepository.update({ id }, data);
    return await this.priceUnitRepository.findOne({ id });
  }

  async destroy(id: string) {
    const priceUnit = await this.priceUnitRepository.findOne(id);
    if (!priceUnit) {
      throw new HttpException('id not found', HttpStatus.NOT_FOUND);
    }
    await this.priceUnitRepository.delete({ id });
    return { deleted: 'successful' };
  }
}
