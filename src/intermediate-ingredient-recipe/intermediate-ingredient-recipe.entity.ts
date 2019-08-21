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
  Unique,
} from 'typeorm';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';

@Entity('IntermediateIngredientRecipe', { schema: 'public' })
@Unique(['intermediateIngredient', 'inventoryIngredient'])
export class IntermediateIngredientRecipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //Multiple recipe items (inventory ingredients) for one intermediate ingredient
  @ManyToOne(
    type => IntermediateIngredient,
    intermediateIngredient =>
      intermediateIngredient.intermediateIngredientRecipes,
    { nullable: false },
  )
  @JoinColumn({ name: 'intermediateIngredient_id' })
  intermediateIngredient: IntermediateIngredient | null;

  @ManyToOne(
    type => InventoryIngredient,
    inventoryIngredient => inventoryIngredient.intermediateIngredientRecipes,
    { nullable: false },
  )
  @JoinColumn({ name: 'inventoryIngredient_id' })
  inventoryIngredient: InventoryIngredient | null;

  @Column('decimal', {
    nullable: false,
    name: 'quantity',
  })
  quantity: number;
}
