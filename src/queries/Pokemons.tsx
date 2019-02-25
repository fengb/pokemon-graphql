import * as React from "react";
import { gql } from "apollo-boost";
import { Query, QueryProps } from "react-apollo";
import { Pokemons, PokemonsVariables } from "./__generated__/Pokemons";

class PokemonsQuery extends Query<Pokemons, PokemonsVariables> {}
interface PokemonsQueryProps extends QueryProps<Pokemons, PokemonsVariables> {}

const query = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
    }
  }
`;

export default function Pokemons(props: PokemonsQueryProps) {
  return <PokemonsQuery query={query} {...props} />;
}
