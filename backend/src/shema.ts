import { buildSchema } from "type-graphql";
import FoodResolver from "./resolvers/FoodResolver";
import UserResolver from "./resolvers/UserResolver";


export default buildSchema({
  resolvers: [FoodResolver, UserResolver,  ],
});
