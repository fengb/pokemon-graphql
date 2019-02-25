import { gql, makeQuery } from "../helpers/apollo";
import * as T from "./__generated__/Preview";

export type Pokemon = T.Preview_pokemons;

export const Query = makeQuery<T.Preview, T.PreviewVariables>(
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

export default Query;
