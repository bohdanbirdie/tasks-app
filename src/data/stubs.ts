import * as Types from "../gql/graphql";

type MarkArDerived<
  T extends { __typename?: F } | object,
  K extends keyof T,
  F = string,
> = Omit<T, K> & { __typename?: F };

const applyTypeName = <T extends { __typename?: F } | object, F extends string>(
  data: T,
  type: F,
): T => {
  return {
    ...data,
    __typename: type,
  };
};

export const tasksStub: Types.TaskItem[] = [
  {
    id: "1",
    title: "Task 1",
    description: "Description 1",
    parentColumnId: "1",
  },
  {
    id: "2",
    title: "Task 2",
    description: "Description 1",
    parentColumnId: "1",
  },
  {
    id: "3",
    title: "Task 3",
    description: "Description 1",
    parentColumnId: "2",
  },
  {
    id: "4",
    title: "Task 4",
    description: "Description 1",
    parentColumnId: "3",
  },
].map((task) => applyTypeName(task, "TaskItem"));

export const columnsStub: MarkArDerived<Types.TasksColumn, "tasks">[] = [
  {
    id: "1",
    title: "Column 1",
  },
  {
    id: "2",
    title: "Column 2",
  },
  {
    id: "3",
    title: "Column 3",
  },
].map((task) => applyTypeName(task, "TasksColumn"));
