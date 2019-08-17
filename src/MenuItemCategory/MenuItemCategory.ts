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
import { MenuItem } from '../MenuItem/MenuItem';

@Entity('MenuItemCategory', { schema: 'public' })
@Index('unique_category', ['name'], { unique: true })
export class MenuItemCategory {
  @Column('uuid', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: string;

  @Column('character varying', {
    nullable: false,
    unique: true,
    length: 20,
    name: 'name',
  })
  name: string;

  @OneToMany(type => MenuItem, menuItem => menuItem.category)
  menuItems: MenuItem[];
}
