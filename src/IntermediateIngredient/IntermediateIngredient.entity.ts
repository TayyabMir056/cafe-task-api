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
