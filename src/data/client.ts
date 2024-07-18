import { ApolloClient, InMemoryCache } from "@apollo/client";
import * as Types from "../gql/graphql";
import { columnsStub, tasksStub } from "./stubs";

const cache = new InMemoryCache();

// TODO: add types to the cache
export const client = new ApolloClient({
  cache,
  resolvers: {
    Query: {
      tasks: (): Types.TaskItem[] => {
        return tasksStub;
      },
      columns: (): Partial<Types.TasksColumn>[] => {
        return columnsStub;
      },
    },
    TasksColumn: {
      tasks: (parent: Types.TasksColumn): Types.TaskItem[] => {
        return tasksStub.filter((task) => task.parentColumnId === parent.id);
      },
    },
  },
});
