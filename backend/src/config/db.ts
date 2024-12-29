import { DataSource } from "typeorm";
import { Food } from "../entities/food";
import { User } from "../entities/user";
import { Reservation } from "../entities/reservation";
import { Article } from "../entities/article";

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "example1",
  database: "postgres",
  synchronize: true,
  logging: ["error", "query"],
  entities: [Food, User, Reservation, Article],
});

// export const dataSource = new DataSource({
//   type: "sqlite",
//   database: "foods.sqlite",
//   synchronize: true,
//   logging: false,
//   entities: [Food, User],
// });
