import { DataSource } from "typeorm";
import { Food } from "./entities/food";
import { User } from "./entities/user";


export const db = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "example1",
  database: "postgres",
  synchronize: true,
  logging: ["error", "query"],
  entities: [Food, User],
});
