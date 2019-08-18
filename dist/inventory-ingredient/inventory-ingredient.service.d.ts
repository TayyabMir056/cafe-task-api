import { InventoryIngredient } from './inventory-ingredient.entity';
import { Repository } from 'typeorm';
import { InventoryIngredientDTO } from './inventory-ingredient.dto';
export declare class InventoryIngredientService {
    private inventoryRepository;
    constructor(inventoryRepository: Repository<InventoryIngredient>);
    showAll(): Promise<InventoryIngredient[]>;
    create(data: Partial<InventoryIngredientDTO>): Promise<InventoryIngredient>;
    read(id: string): Promise<InventoryIngredient>;
    update(id: string, data: Partial<InventoryIngredientDTO>): Promise<InventoryIngredient>;
    destroy(id: string): Promise<{
        deleted: boolean;
    }>;
}
