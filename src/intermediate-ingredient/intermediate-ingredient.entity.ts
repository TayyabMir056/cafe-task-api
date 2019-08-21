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

@Entity('IntermediateIngredient', { schema: 'public' })
@Index('intermediate_ingredients_name_key', ['name'], { unique: true })
export class IntermediateIngredient {
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

  //Each IntermediateIngredients contains a single price unit (e.g. kg,litre)
  @ManyToOne(
    type => PriceUnit,
    priceUnit => priceUnit.intermediateIngredients,
    { nullable: false },
  )
  @JoinColumn({ name: 'priceUnit' })
  priceUnit: PriceUnit | null;

  //ItermidateIngredient foreign key is in IntermediateIngredientRecipeEntity
  @OneToMany(
    type => IntermediateIngredientRecipe,
    intermediateIngredientRecipe =>
      intermediateIngredientRecipe.intermediateIngredient,
  )
  intermediateIngredientRecipes: IntermediateIngredientRecipe[];

  //IntermediateIngredient foreign key is used in menuItemRecipe
  @OneToMany(
    type => MenuItemRecipe,
    menuItemRecipe => menuItemRecipe.intermediateIngredient,
  )
  menuItemRecipes: MenuItemRecipe[];
}
