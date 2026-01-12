import {
  movieTypesDefs,
  movieQueryTypeDefs,
  movieMutationTypeDefs,
  userQueryTypeDefs,
  userTypeDefs,
  userMutationTypeDefs,
  commentMutationTypeDefs,
  commentTypesDefs,
} from "./movies/graphql/schema.ts";
import { movieQueries, userQueries } from "./movies/graphql/queries.ts";
import {
  commentMutations,
  movieMutations,
  userMutations,
} from "./movies/graphql/mutations.ts";

export const typeDefs = `
  ${movieTypesDefs}
  ${userTypeDefs}
  ${commentTypesDefs}

  type Query {
    ${movieQueryTypeDefs}
    ${userQueryTypeDefs}
  }

  type Mutation {
    ${movieMutationTypeDefs}
    ${userMutationTypeDefs}
    ${commentMutationTypeDefs}
  }
`;

export const resolvers = {
  Query: { ...movieQueries, ...userQueries },
  Mutation: {
    ...movieMutations,
    ...userMutations,
    ...commentMutations,
  },
};
