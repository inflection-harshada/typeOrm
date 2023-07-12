
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Category } from './category';
import { Brand } from './brand';
import { ProductOffer } from './productOfer';


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.products) // many prod one category
  category: Category;

  @ManyToOne(() => Brand, (brand) => brand.products)  // many prod one brand
  brand: Brand;

  @Column()
  basePrice: number;

  @Column()
  taxes: number;

  @Column()
  manufacturerName: string;

  @Column()
  manufacturerPartNumber: string;

  @OneToMany(() => ProductOffer, (productOffer) => productOffer.products)
  productOffers: ProductOffer[];
}


