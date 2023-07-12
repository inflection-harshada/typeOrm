import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Product, (product) => product.brand)   //many prod one brand
  products: Product[];

  @Column()
  name: string;

  @Column()
  logoUrl: string;
}
