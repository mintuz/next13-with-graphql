import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: ["./app/**/*.ts", "./lib/**/*.ts"],
  generates: {
    "./server/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "./lib/graphql/__generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
