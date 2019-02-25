import React from "react";
import { gql } from "apollo-boost";
import {
  Pokemons,
  PokemonsVariables,
  Pokemons_pokemons as Pokemon
} from "./__generated__/Pokemons";
import { Query, makeQuery } from "../helpers/apollo";

const PreviewQuery = makeQuery(
  class PokemonsQuery extends Query<Pokemons, PokemonsVariables> {},
  gql`
    query Pokemons($first: Int!) {
      pokemons(first: $first) {
        id
        number
        name
        image
      }
    }
  `
);

function Preview({ pokemon }: { pokemon: Pokemon }) {
  return (
    <figure>
      <img src={pokemon.image || ""} />
      <caption>
        {pokemon.number} &mdash; {pokemon.name}
      </caption>
    </figure>
  );
}

export default function PokemonPreview() {
  return (
    <PreviewQuery variables={{ first: 10 }}>
      {({ data }) => {
        if (data) {
          return (data.pokemons || []).map(
            pokemon => pokemon && Preview({ pokemon })
          );
        }
      }}
    </PreviewQuery>
  );
}
