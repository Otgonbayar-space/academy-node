import {
  movieTypesDefs,
  movieQueryTypeDefs,
  movieMutationTypeDefs,
  userQueryTypeDefs,
  userTypeDefs,
  userMutationTypeDefs,
} from "./movies/graphql/schema.ts";
import { movieQueries, userQueries } from "./movies/graphql/queries.ts";
import { movieMutations, userMutations } from "./movies/graphql/mutations.ts";

export const typeDefs = `
  ${movieTypesDefs}
  ${userTypeDefs}

  type Query {
    ${movieQueryTypeDefs}
    ${userQueryTypeDefs}
  }

  type Mutation {
    ${movieMutationTypeDefs}
    ${userMutationTypeDefs}
  }
`;

export const resolvers = {
  Query: { ...movieQueries, ...userQueries },
  Mutation: {
    ...movieMutations,
    ...userMutations,
  },
};
