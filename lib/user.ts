import {
  client,
  GetUsersQuery,
  GetUsersQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
  GET_USER,
  GET_USERS,
} from "./graphql";

export const getUsers = async () => {
  return client
    .query<GetUsersQuery, GetUsersQueryVariables>(GET_USERS, {})
    .toPromise();
};

export const getUserById = async (id: string) => {
  return client
    .query<GetUserQuery, GetUserQueryVariables>(GET_USER, { id })
    .toPromise();
};
