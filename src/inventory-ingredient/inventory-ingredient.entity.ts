import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { PriceUnit } from '../price-unit/price-unit.entity';
import { IntermediateIngredientRecipe } from '../intermediate-ingredient-recipe/intermediate-ingredient-recipe.entity';
import { MenuItemRecipe } from '../menu-item-recipe/menu-item-recipe.entity';

@Entity('InventoryIngredient', { schema: 'public' })
@Index('unique_ingredient_name', ['name'], { unique: true })
export class InventoryIngredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', {
    nullable: false,
    unique: true,
    name: 'name',
  })
  name: string;

  @Column('decimal', {
    nullable: false,
    name: 'cost',
  })
  cost: number;

  @ManyToOne(type => PriceUnit, priceUnit => priceUnit.inventoryIngredients, {
    nullable: false,
  })
  @JoinColumn({ name: 'priceUnit' })
  priceUnit: PriceUnit | null;

  @OneToMany(
    type => IntermediateIngredientRecipe,
    intermediateIngredientRecipe =>
      intermediateIngredientRecipe.inventoryIngredient,
  )
  intermediateIngredientRecipes: IntermediateIngredientRecipe[];

  @OneToMany(
    type => MenuItemRecipe,
    menuItemRecipe => menuItemRecipe.inventoryIngredient,
  )
  menuItemRecipes: MenuItemRecipe[];
}
