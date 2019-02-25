import * as React from "react";
import { Query, QueryProps } from "react-apollo";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export function makeQuery<TData, TVariables>(query: any) {
  class Klass extends Query<TData, TVariables> {}
  type Props = QueryProps<TData, TVariables>;
  return function(props: Omit<Props, "query">) {
    return <Klass query={query} {...props as any} />;
  };
}
