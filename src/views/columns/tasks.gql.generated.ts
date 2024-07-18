import * as Types from "@/gql/graphql.ts";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type ColumnsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ColumnsQuery = {
  __typename?: "Query";
  columns: Array<{
    __typename?: "TasksColumn";
    id: string;
    title: string;
    tasks: Array<{
      __typename?: "TaskItem";
      id: string;
      title: string;
      description?: string | null;
      parentColumnId: string;
    }>;
  }>;
};

export const ColumnsDocument = gql`
  query Columns {
    columns @client {
      id
      title
      tasks {
        id
        title
        description
        parentColumnId
      }
    }
  }
`;

/**
 * __useColumnsQuery__
 *
 * To run a query within a React component, call `useColumnsQuery` and pass it any options that fit your needs.
 * When your component renders, `useColumnsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useColumnsQuery({
 *   variables: {
 *   },
 * });
 */
export function useColumnsQuery(
  baseOptions?: Apollo.QueryHookOptions<ColumnsQuery, ColumnsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ColumnsQuery, ColumnsQueryVariables>(
    ColumnsDocument,
    options,
  );
}
export function useColumnsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ColumnsQuery,
    ColumnsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ColumnsQuery, ColumnsQueryVariables>(
    ColumnsDocument,
    options,
  );
}
export function useColumnsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    ColumnsQuery,
    ColumnsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ColumnsQuery, ColumnsQueryVariables>(
    ColumnsDocument,
    options,
  );
}
export type ColumnsQueryHookResult = ReturnType<typeof useColumnsQuery>;
export type ColumnsLazyQueryHookResult = ReturnType<typeof useColumnsLazyQuery>;
export type ColumnsSuspenseQueryHookResult = ReturnType<
  typeof useColumnsSuspenseQuery
>;
export type ColumnsQueryResult = Apollo.QueryResult<
  ColumnsQuery,
  ColumnsQueryVariables
>;
