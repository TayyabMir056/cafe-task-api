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
import { MenuItem } from '../menu-item/menu-item.entity';

@Entity('MenuItemCategory', { schema: 'public' })
//@Unique(['name'])
export class MenuItemCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 20,
    name: 'name',
  })
  name: string;

  @OneToMany(type => MenuItem, menuItem => menuItem.category)
  menuItems: MenuItem[];
}
