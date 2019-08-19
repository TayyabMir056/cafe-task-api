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

@Entity('PriceUnit', { schema: 'public' })
@Unique(['name'])
export class PriceUnit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('character varying', {
    nullable: false,
    unique: true,
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
