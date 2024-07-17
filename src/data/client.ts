import { ApolloClient, InMemoryCache } from "@apollo/client";
import * as Types from "../gql/graphql";
import { tasksStub } from "./stubs";

const cache = new InMemoryCache();

const applyTypeName = <T extends { __typename?: F }, F extends string>(
  data: T,
  type: F,
): T => {
  return {
    ...data,
    __typename: type,
  };
};

// TODO: add types to the cache
export const client = new ApolloClient({
  cache,
  resolvers: {
    Query: {
      tasks: (): Types.TaskItem[] => {
        return tasksStub.map((task) => applyTypeName(task, "TaskItem"));
      },
    },
  },
});
