/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  columns: Array<TasksColumn>;
  task?: Maybe<TaskItem>;
  tasks: Array<TaskItem>;
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};

export type TaskItem = {
  __typename?: 'TaskItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  parentColumnId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type TasksColumn = {
  __typename?: 'TasksColumn';
  id: Scalars['ID']['output'];
  tasks: Array<TaskItem>;
  title: Scalars['String']['output'];
};

export type ColumnsQueryVariables = Exact<{ [key: string]: never; }>;


export type ColumnsQuery = { __typename?: 'Query', columns: Array<{ __typename?: 'TasksColumn', id: string, title: string, tasks: Array<{ __typename?: 'TaskItem', id: string, title: string, description?: string | null, parentColumnId: string }> }> };


export const ColumnsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columns"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"parentColumnId"}}]}}]}}]}}]} as unknown as DocumentNode<ColumnsQuery, ColumnsQueryVariables>;