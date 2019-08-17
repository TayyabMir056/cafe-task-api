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
import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient.entity';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient.entity';

@Entity('IntermediateIngredientRecipe', { schema: 'public' })
export class IntermediateIngredientRecipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'quantity',
  })
  quantity: number;
}
