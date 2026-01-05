// import express from "express";
// import { ApolloServer } from "apollo-server-express";
// import mongoose from "mongoose";
// import { typeDefs } from "./graphql/schema.ts";
// import { resolvers } from "./graphql/resolvers.ts";

// const startServer = async () => {
//   const app = express();

//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

//   await server.start();
//   server.applyMiddleware({ app: app as any });

//   await mongoose.connect(
//     "mongodb+srv://kaobuuu30_db_user:figEDNEj8W$tbgy@cluster0.celbvau.mongodb.net/sample_mflix?appName=Cluster0"
//   );
//   console.log("MongoDB connected");

//   app.listen({ port: 4000 }, () =>
//     console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
//   );
// };

startServer();

import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { typeDefs } from "./graphql/schema.ts";
import { resolvers } from "./graphql/resolvers.ts";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  await mongoose.connect(
    "mongodb+srv://kaobuuu30_db_user:figEDNEj8W$tbgy@cluster0.celbvau.mongodb.net/sample_mflix?appName=Cluster0"
  );
  console.log("MongoDB connected");

  app.listen({ port: 4000 }, () =>
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
