import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: String): User!
  }

  type User {
    name: String
  }
`;
