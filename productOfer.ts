import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product';


@Entity()
export class ProductOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.productOffers) // many productOff one prod
  //@JoinColumn({name:'product_Id'})
  product: Product;

  @Column()
  title: string;

  @Column()
  details: string;

}