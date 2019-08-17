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
import { MenuItemCategory } from '../MenuItemCategory/MenuItemCategory';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe';

@Entity('MenuItem', { schema: 'public' })
@Index('unique_menu_item', ['name'], { unique: true })
export class MenuItem {
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

  @ManyToOne(
    type => MenuItemCategory,
    menuItemCategory => menuItemCategory.menuItems,
    { nullable: false },
  )
  @JoinColumn({ name: 'category' })
  category: MenuItemCategory | null;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'sellingPrice',
  })
  sellingPrice: number;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'cost',
  })
  cost: number;

  @OneToMany(type => MenuItemRecipe, menuItemRecipe => menuItemRecipe.menuItem)
  menuItemRecipes: MenuItemRecipe[];
}
