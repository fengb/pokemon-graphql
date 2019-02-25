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

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export default function (props: Omit<PokemonsQueryProps, "query">) {
  return <PokemonsQuery query={query} {...props} />;
}
