import { gql } from "apollo-boost";
import { Pokemons, PokemonsVariables } from "./__generated__/Pokemons";
import { Query, makeQuery } from "../helpers/apollo";

export default makeQuery(
  class PokemonsQuery extends Query<Pokemons, PokemonsVariables> {},
  gql`
    query Pokemons($first: Int!) {
      pokemons(first: $first) {
        id
        number
        name
      }
    }
  `
);
