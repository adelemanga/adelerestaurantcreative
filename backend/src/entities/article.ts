import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Reservation } from "./reservation";
import { Food } from "./food";

@ObjectType() //typeGraphQl
@Entity() //typeORM
export class Article extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  availability: boolean;

  @Column("decimal")
  price: number;

  @Field(() => Food)
  @ManyToOne(() => Food, (food) => food.articles)
  food: Food;

  @Field(() => Reservation)
  @ManyToOne(() => Reservation, (reservation) => reservation.articles)
  reservation: Reservation;
}
