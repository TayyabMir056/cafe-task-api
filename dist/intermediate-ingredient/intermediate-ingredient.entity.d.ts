import { PriceUnit } from '../price-unit/price-unit.entity';
import { IntermediateIngredientRecipe } from '../intermediate-ingredient-recipe/intermediate-ingredient-recipe.entity';
import { MenuItemRecipe } from '../menu-item-recipe/menu-item-recipe.entity';
export declare class IntermediateIngredient {
    id: string;
    name: string;
    cost: number;
    priceUnit: PriceUnit | null;
    intermediateIngredientRecipes: IntermediateIngredientRecipe[];
    menuItemRecipes: MenuItemRecipe[];
}
