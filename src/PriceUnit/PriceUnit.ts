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
import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient';

@Entity('PriceUnit', { schema: 'public' })
export class PriceUnit {
  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'id',
  })
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
