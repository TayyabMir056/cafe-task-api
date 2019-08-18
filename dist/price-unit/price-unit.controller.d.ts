import { PriceUnitService } from './price-unit.service';
import { PriceUnitDTO } from './price-unit.dto';
export declare class PriceUnitController {
    private priceUnitService;
    constructor(priceUnitService: PriceUnitService);
    getAllPriceUnits(): Promise<import("./price-unit.entity").PriceUnit[]>;
    getUnitById(id: string): Promise<import("./price-unit.entity").PriceUnit>;
    createPriceUnit(data: Partial<PriceUnitDTO>): Promise<import("./price-unit.entity").PriceUnit>;
    updatePriceUnit(id: string, data: Partial<PriceUnitDTO>): Promise<import("./price-unit.entity").PriceUnit>;
    deletePriceUnit(id: string): Promise<{
        deleted: string;
    }>;
}
