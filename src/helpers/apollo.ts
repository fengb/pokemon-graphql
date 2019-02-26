export { gql } from "apollo-boost";
import * as hooks from "react-apollo-hooks";

export function makeQuery<TData, TVariables>(query: any) {
  function useQuery(params: hooks.QueryHookOptions<TVariables>) {
    return hooks.useQuery<TData, TVariables>(query, params);
  }
  useQuery.QUERY = query;
  return useQuery;
}
