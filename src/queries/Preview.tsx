import { gql, makeQuery } from "../helpers/apollo";
import * as T from "./__generated__/Preview";

export function pad(num: number) {
  return Math.ceil(num / 100) * 100;
}

export const useQuery = makeQuery<T.Preview, T.PreviewVariables>(
  gql`
    query Preview($first: Int!) {
      pokemons(first: $first) {
        id
        number
        name
        image
      }
    }
  `
);
