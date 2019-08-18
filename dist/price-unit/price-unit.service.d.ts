import { Repository } from 'typeorm';
import { PriceUnit } from './price-unit.entity';
import { PriceUnitDTO } from './price-unit.dto';
export declare class PriceUnitService {
    private priceUnitRepository;
    constructor(priceUnitRepository: Repository<PriceUnit>);
    showAll(): Promise<PriceUnit[]>;
    create(data: Partial<PriceUnitDTO>): Promise<PriceUnit>;
    read(id: string): Promise<PriceUnit>;
    update(id: string, data: Partial<PriceUnitDTO>): Promise<PriceUnit>;
    destroy(id: string): Promise<{
        deleted: string;
    }>;
}
