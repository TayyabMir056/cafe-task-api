import { Repository } from 'typeorm';
import { IntermediateIngredient } from './intermediate-ingredient.entity';
import { IntermediateIngredientDTO } from './intermediate-ingredient.dto';
export declare class IntermediateIngredientService {
    private intermediateIngredientRepository;
    constructor(intermediateIngredientRepository: Repository<IntermediateIngredient>);
    getAll(): Promise<IntermediateIngredient[]>;
    read(id: string): Promise<IntermediateIngredient>;
    create(data: Partial<IntermediateIngredientDTO>): Promise<IntermediateIngredient>;
    update(id: string, data: Partial<IntermediateIngredientDTO>): Promise<IntermediateIngredient>;
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
}
