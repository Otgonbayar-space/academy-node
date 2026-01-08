import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { typeDefs, resolvers } from "./apolloServer.ts";
import { Users } from "./movies/db/models.ts";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;

mongoose
  .connect(
    "mongodb+srv://kaobuuu30_db_user:figEDNEj8W$tbgy@cluster0.celbvau.mongodb.net/sample_mflix?appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

export interface IContext {
  user?: null;
}

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const token = req.headers.authorization;

    if (!token) {
      return "token bhgu";
    }
    if (!SECRET_KEY) {
      return "secret key bhgu";
    }
    const decoded = jwt.verify(token, SECRET_KEY);

    const userDetail = await Users.find({
      email: decoded.email,
    });
    if (!userDetail) {
      return "user bhgu bn";
    }

    return {
      user: userDetail,
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
