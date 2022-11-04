import { createClient } from "urql/core";

export const client = createClient({
  url: "http://localhost:3000/api/graphql",
});
