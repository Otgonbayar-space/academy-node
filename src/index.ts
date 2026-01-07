import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { typeDefs, resolvers } from "./apolloServer.ts";

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
  user: {
    firstname: string;
  };
}

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    return {
      user: {
        firstname: "bat",
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
