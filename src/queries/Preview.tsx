import * as hooks from "react-apollo-hooks";
import { gql } from "apollo-boost";
import * as T from "./__generated__/Preview";

export type Pokemon = T.Preview_pokemons;

export const QUERY = gql`
  query Preview($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
    }
  }
`;

export function pad(num: number) {
  return Math.ceil(num / 100) * 100;
}

export function useQuery(params: hooks.QueryHookOptions<T.PreviewVariables>) {
  return hooks.useQuery<T.Preview, T.PreviewVariables>(QUERY, params);
}
