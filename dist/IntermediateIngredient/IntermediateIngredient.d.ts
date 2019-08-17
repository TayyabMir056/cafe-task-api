import { PriceUnit } from '../PriceUnit/PriceUnit';
import { IntermediateIngredientRecipe } from '../IntermediateIngredientRecipe/IntermediateIngredientRecipe';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe';
export declare class IntermediateIngredient {
    id: string;
    name: string;
    cost: number;
    priceUnit: PriceUnit | null;
    intermediateIngredientRecipes: IntermediateIngredientRecipe[];
    menuItemRecipes: MenuItemRecipe[];
}
