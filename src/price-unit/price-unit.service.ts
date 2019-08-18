import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PriceUnit } from './price-unit.entity';
import { PriceUnitDTO } from './price-unit.dto';

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
    const priceUnit = await this.priceUnitRepository.create(data);
    await this.priceUnitRepository.save(priceUnit);
    return priceUnit;
  }

  async read(id: string) {
    return await this.priceUnitRepository.findOne({ id });
  }

  async update(id: string, data: Partial<PriceUnitDTO>) {
    await this.priceUnitRepository.update({ id }, data);
    return await this.priceUnitRepository.findOne({ id });
  }

  async destroy(id: string) {
    await this.priceUnitRepository.delete({ id });
    return { deleted: 'successful' };
  }
}
