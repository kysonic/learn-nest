import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Flavor } from './flavor.entity';
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.name, {
    cascade: true,
  })
  flavors: Flavor[];
}
