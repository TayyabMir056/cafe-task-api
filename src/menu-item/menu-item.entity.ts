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
import { MenuItemCategory } from '../menu-item-category/menu-item-category.entity';
import { MenuItemRecipe } from '../MenuItemRecipe/MenuItemRecipe.entity';

@Entity('MenuItem', { schema: 'public' })
@Index('unique_menu_item', ['name'], { unique: true })
export class MenuItem {
  @PrimaryGeneratedColumn('uuid')
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

  @Column('decimal', {
    nullable: false,
    name: 'sellingPrice',
  })
  sellingPrice: number;

  @Column('decimal', {
    nullable: false,
    name: 'cost',
  })
  cost: number;

  @OneToMany(type => MenuItemRecipe, menuItemRecipe => menuItemRecipe.menuItem)
  menuItemRecipes: MenuItemRecipe[];
}
