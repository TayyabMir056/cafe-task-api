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

@Entity('PriceUnit', { schema: 'public' })
export class PriceUnit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @OneToMany(
    type => IntermediateIngredient,
    intermediateIngredient => intermediateIngredient.priceUnit,
  )
  intermediateIngredients: IntermediateIngredient[];

  @OneToMany(
    type => InventoryIngredient,
    inventoryIngredient => inventoryIngredient.priceUnit,
  )
  inventoryIngredients: InventoryIngredient[];
}
