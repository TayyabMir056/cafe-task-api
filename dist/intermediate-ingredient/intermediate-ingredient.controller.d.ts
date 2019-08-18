import { IntermediateIngredientService } from './intermediate-ingredient.service';
import { IntermediateIngredientDTO } from './intermediate-ingredient.dto';
export declare class IntermediateIngredientController {
    private intermediateIngredientService;
    constructor(intermediateIngredientService: IntermediateIngredientService);
    getAllIntermediateIngredient(): Promise<import("./intermediate-ingredient.entity").IntermediateIngredient[]>;
    getIntermediateIngredientById(id: string): Promise<import("./intermediate-ingredient.entity").IntermediateIngredient>;
    addNewIntermediateIngredient(data: Partial<IntermediateIngredientDTO>): Promise<import("./intermediate-ingredient.entity").IntermediateIngredient>;
    updateIntermediateIngredient(id: string, data: Partial<IntermediateIngredientDTO>): Promise<import("./intermediate-ingredient.entity").IntermediateIngredient>;
    deleteIntermediateIngredient(id: string): Promise<{
        deleted: boolean;
    }>;
}
