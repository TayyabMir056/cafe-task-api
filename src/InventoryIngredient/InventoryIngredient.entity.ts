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
import { PriceUnit } from '../PriceUnit/PriceUnit.entity';
import { IntermediateIngredientRecipe } from '../IntermediateIngredientRecipe/IntermediateIngredientRecipe.entity';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe.entity';

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

  @Column('double precision', {
    nullable: false,
    precision: 53,
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
