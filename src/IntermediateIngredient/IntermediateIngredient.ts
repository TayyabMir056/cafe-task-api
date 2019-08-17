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
import { PriceUnit } from '../PriceUnit/PriceUnit';
import { IntermediateIngredientRecipe } from '../IntermediateIngredientRecipe/IntermediateIngredientRecipe';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe';

@Entity('IntermediateIngredient', { schema: 'public' })
@Index('intermediate_ingredients_name_key', ['name'], { unique: true })
export class IntermediateIngredient {
  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'id',
  })
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

  @ManyToOne(
    type => PriceUnit,
    priceUnit => priceUnit.intermediateIngredients,
    { nullable: false },
  )
  @JoinColumn({ name: 'priceUnit' })
  priceUnit: PriceUnit | null;

  @OneToMany(
    type => IntermediateIngredientRecipe,
    intermediateIngredientRecipe =>
      intermediateIngredientRecipe.intermediateIngredient,
  )
  intermediateIngredientRecipes: IntermediateIngredientRecipe[];

  @OneToMany(
    type => MenuItemRecipe,
    menuItemRecipe => menuItemRecipe.intermediateIngredient,
  )
  menuItemRecipes: MenuItemRecipe[];
}
