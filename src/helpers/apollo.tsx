import * as React from "react";
import { Query, QueryProps } from "react-apollo";
export { gql } from "apollo-boost";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export function makeQuery<TData, TVariables>(query: any) {
  type Props = QueryProps<TData, TVariables>;
  return function(props: Omit<Props, "query">) {
    return <Query<TData, TVariables> query={query} {...props as any} />;
  };
}
