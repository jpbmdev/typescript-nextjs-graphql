import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTaskInput = {
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask?: Maybe<Task>;
  updateTask?: Maybe<Task>;
  deleteTask?: Maybe<Task>;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  tasks: Array<Task>;
  task?: Maybe<Task>;
};


export type QueryTasksArgs = {
  status?: Maybe<TaskStatus>;
};


export type QueryTaskArgs = {
  id: Scalars['Int'];
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['Int'];
  title: Scalars['String'];
  status: TaskStatus;
};

export enum TaskStatus {
  Active = 'active',
  Completed = 'completed'
}

export type UpdateTaskInput = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  status?: Maybe<TaskStatus>;
};

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: number, title: string, status: TaskStatus }> };


export const TasksDocument = gql`
    query Tasks {
  tasks {
    id
    title
    status
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;