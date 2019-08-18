import { InventoryIngredientService } from './inventory-ingredient.service';
import { InventoryIngredientDTO } from './inventory-ingredient.dto';
export declare class InventoryIngredientController {
    private inventoryIngredientService;
    constructor(inventoryIngredientService: InventoryIngredientService);
    getAllIngredients(): Promise<import("./inventory-ingredient.entity").InventoryIngredient[]>;
    gerIngredientById(id: string): Promise<import("./inventory-ingredient.entity").InventoryIngredient>;
    addIngredient(data: Partial<InventoryIngredientDTO>): Promise<import("./inventory-ingredient.entity").InventoryIngredient>;
    updateIngredient(id: string, data: Partial<InventoryIngredientDTO>): Promise<import("./inventory-ingredient.entity").InventoryIngredient>;
    deleteIngredient(id: string): Promise<{
        deleted: boolean;
    }>;
}
