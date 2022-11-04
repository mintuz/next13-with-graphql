import { createSchema, createYoga } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs/queries";

const schema = createSchema({
  typeDefs,
  resolvers,
});

export const server = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
});
