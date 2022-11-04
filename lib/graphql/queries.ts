import gql from "graphql-tag";

export const GET_USERS = gql`
  query GetUsers {
    users {
      name
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: String) {
    user(id: $id) {
      name
    }
  }
`;
