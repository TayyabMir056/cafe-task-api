import { PriceUnit } from '../PriceUnit/PriceUnit.entity';
import { IntermediateIngredientRecipe } from '../IntermediateIngredientRecipe/IntermediateIngredientRecipe.entity';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe.entity';
export declare class IntermediateIngredient {
    id: string;
    name: string;
    cost: number;
    priceUnit: PriceUnit | null;
    intermediateIngredientRecipes: IntermediateIngredientRecipe[];
    menuItemRecipes: MenuItemRecipe[];
}
