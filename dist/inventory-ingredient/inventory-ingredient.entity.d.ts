import { PriceUnit } from '../price-unit/price-unit.entity';
import { IntermediateIngredientRecipe } from '../IntermediateIngredientRecipe/IntermediateIngredientRecipe.entity';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe.entity';
export declare class InventoryIngredient {
    id: string;
    name: string;
    cost: number;
    priceUnit: PriceUnit | null;
    intermediateIngredientRecipes: IntermediateIngredientRecipe[];
    menuItemRecipes: MenuItemRecipe[];
}
