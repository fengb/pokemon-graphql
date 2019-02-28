import * as hooks from "react-apollo-hooks";
export { gql } from "apollo-boost";

export function makeQuery<TData, TVars>(query: any) {
  function useQuery(params: hooks.QueryHookOptions<TVars>) {
    return hooks.useQuery<TData, TVars>(query, params);
  }
  useQuery.query = query;
  return useQuery;
}

export interface ConnectionData<T> {
  pageInfo: any;
  edges: T[] | null;
}

export function relayFetchMerge<TProp extends string>(name: TProp) {
  return function<TData extends { [K in TProp]: ConnectionData<any> | null }>(
    prev: TData,
    options: {
      fetchMoreResult?: TData;
    }
  ): TData {
    const next = options.fetchMoreResult;
    if (next == null || next[name] == null || next[name]!.edges == null) {
      return prev;
    }

    return {
      ...prev,
      [name]: {
        ...prev[name],
        pageInfo: next[name]!.pageInfo,
        edges: [...prev[name]!.edges!, ...next[name]!.edges!]
      }
    };
  };
}
