export { };
import "reflect-metadata";
import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { dataSource } from "../src/config/db";
import schemaPromise from "../src/shema";
import "dotenv/config";

const port = process.env.SERVER_PORT || 4002;

const allowedOrigins =
  process.env.CORS_ALLOWED_ORIGINS || "http://localhost:3000";

schemaPromise.then(async (schema) => {
  await dataSource.initialize();
  const app = express();
  const httpServer = http.createServer(app);
  const plugins = [ApolloServerPluginDrainHttpServer({ httpServer })];
  const server = new ApolloServer({ schema, plugins });
  await server.start();
  const corsConfig = { origin: allowedOrigins.split(","), credentials: true };
  app.use(cors<cors.CorsRequest>(corsConfig));
  const context = async ({ req, res }: any) => ({ req, res });
  const expressMW = expressMiddleware(server, { context });
  app.use(express.json(), expressMW);
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
});

export type Context = {
  res: any;
  id: number;
  email: string;
  role: string;
};

// import "reflect-metadata";
// import "dotenv/config";
// import { buildSchema } from "type-graphql";
// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import jwt from "jsonwebtoken";
// import { dataSource } from "./config/db";
// import UserResolver from "./resolvers/UserResolver";
// import FoodResolver from "./resolvers/FoodResolver";

// export type Context = {
//   id: number;
//   email: string;
//   role: string;
// };

// const start = async () => {
//   try {
//     await dataSource.initialize();
//     console.log("Data Source a été initialisée avec succès!");

//     const schema = await buildSchema({
//       resolvers: [FoodResolver, UserResolver],
//       authChecker: ({ context }: { context: Context }, roles) => {
//         console.log("roles for this query/mutation ", roles);
//         if (!context.email) {
//           return false;
//         }

//         if (roles.length === 0) {
//           return true;
//         }

//         if (roles.includes(context.role)) {
//           return true;
//         } else {
//           return false;
//         }
//       },
//     });

//     const server = new ApolloServer({ schema });

//     const { url } = await startStandaloneServer(server, {
//       listen: { port: 4002 },
//       context: async ({ req }) => {
//         if (process.env.JWT_SECRET_KEY === undefined) {
//           throw new Error("NO JWT SECRET KEY CONFIGURED");
//         }
//         const token = req.headers.authorization?.split(" ")[1];
//         if (token) {
//           const payload = jwt.verify(
//             token,
//             process.env.JWT_SECRET_KEY
//           ) as Context;
//           if (payload) {
//             return payload;
//           }
//         }
//         return {};
//       },
//     });

//     console.log(`🚀  Server ready at: ${url}`);
//   } catch (error) {
//     console.error("Erreur lors de l'initialisation de la Data Source:", error);
//   }
// };

// start();
