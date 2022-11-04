import { Resolvers } from "../__generated__/graphql";

export const resolvers: Resolvers = {
  Query: {
    users() {
      return [{ name: "Nextjs" }];
    },
    user() {
      return { name: "Adam" };
    },
  },
};
