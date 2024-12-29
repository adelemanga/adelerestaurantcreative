import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./user";
import { Article } from "./article";

export enum ReservationStatus {
  Pending = "pending",
  Validated = "validated",
  Ongoing = "ongoing",
  Ended = "ended",
}

@ObjectType() // GraphQL Object
@Entity() // TypeORM Entity
export class Reservation extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  startDate: Date;

  @Field()
  @Column()
  endDate: Date;

  @Field()
  @Column({ type: "enum", enum: ReservationStatus })
  status: ReservationStatus;

  @Field(() => [User])
  @ManyToOne(() => User, (user) => user.reservations)
  user: User;

  @Field(() => [Article])
  @OneToMany(() => Article, (article) => article.reservation)
  articles: Article[];
}
