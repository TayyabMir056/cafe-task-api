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
import { MenuItem } from '../menu-item/menu-item.entity';
import { InventoryIngredient } from '../inventory-ingredient/inventory-ingredient.entity';
import { IntermediateIngredient } from '../intermediate-ingredient/intermediate-ingredient.entity';
import { IngredientType } from '../IngredientType/IngredientType.enum';

@Entity('MenuItemRecipe', { schema: 'public' })
export class MenuItemRecipe {
  @PrimaryGeneratedColumn('uuid')
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

  @Column('decimal', {
    nullable: false,
    name: 'quantity',
  })
  quantity: number;

  @Column('integer', {
    nullable: false,
    name: 'ingredientType',
  })
  ingredientType: IngredientType;
}
