import React from "react";
import * as T from "./__generated__/PokemonDetail";
import { match } from "react-router";
import { gql, makeQuery } from "../helpers/apollo";
import * as Preview from "../queries/Preview";
import PokemonCard from "../components/PokemonCard";
import { compact, findIndex, range } from "lodash";
import Showcase from "../components/Showcase";

const useQuery = makeQuery<T.PokemonDetail, T.PokemonDetailVariables>(gql`
  query PokemonDetail($id: String!) {
    pokemon(id: $id) {
      id
      number
      name
      classification
      types
      resistant
      weaknesses
      image
    }
  }
`);

export function findGroup<T>(
  array: T[],
  distance: number,
  predicate: any
): (T | null)[] | null {
  const i = findIndex(array, predicate);
  if (i == null) {
    return null;
  }

  const center = findIndex(array, predicate);
  if (center == -1) {
    return null;
  }

  const indexes = range(center - distance, center + distance + 1);
  return indexes.map(i => array[i]);
}

export default function PokemonDetail(props: {
  match: match<{ number: string }>;
}) {
  const number = props.match.params.number;
  const { data, error, loading } = Preview.useQuery({
    variables: { first: Preview.pad(+number + 1) }
  });
  if (!data || !data.pokemons) {
    return null;
  }

  const pokemons = findGroup(compact(data.pokemons), 2, { number });
  if (pokemons == null) {
    return null;
  }

  return (
    <Showcase>
      {pokemons.map((pokemon, i) =>
        pokemon ? (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ) : (
          <PokemonCard.Placeholder key={i} />
        )
      )}
    </Showcase>
  );
}
