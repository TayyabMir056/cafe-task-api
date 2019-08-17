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
import { MenuItem } from '../MenuItem/MenuItem.entity';
import { InventoryIngredient } from '../InventoryIngredient/InventoryIngredient.entity';
import { IntermediateIngredient } from '../IntermediateIngredient/IntermediateIngredient.entity';

@Entity('MenuItemRecipe', { schema: 'public' })
export class MenuItemRecipe {
  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: string;

  @ManyToOne(type => MenuItem, menuItem => menuItem.menuItemRecipes, {
    nullable: false,
  })
  @JoinColumn({ name: 'menuItem_id' })
  menuItem: MenuItem | null;

  @ManyToOne(
    type => InventoryIngredient,
    inventoryIngredient => inventoryIngredient.menuItemRecipes,
    {},
  )
  @JoinColumn({ name: 'inventoryIngredient_id' })
  inventoryIngredient: InventoryIngredient | null;

  @ManyToOne(
    type => IntermediateIngredient,
    intermediateIngredient => intermediateIngredient.menuItemRecipes,
    {},
  )
  @JoinColumn({ name: 'intermediateIngredient_id' })
  intermediateIngredient: IntermediateIngredient | null;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'quantity',
  })
  quantity: number;
}
