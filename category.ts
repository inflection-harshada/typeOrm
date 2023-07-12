
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.children) // many child one category
  parentCategory: Category;

  @OneToMany(() => Category, (category) => category.parentCategory) // one parentcat many category
  children: Category[];
}