import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/gql/schema.gql",
  documents: "src/**/*.gql.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
    "src/**/*": {
      preset: "near-operation-file",
      plugins: ["typescript-operations", "typescript-react-apollo"],
      presetConfig: {
        baseTypesPath: "~@/gql/graphql.ts",
      },
    },
  },
  hooks: { afterAllFileWrite: ["npm run lint -- --fix"] },
};

export default config;
