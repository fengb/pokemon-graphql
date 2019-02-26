import React from "react";
import * as T from "./__generated__/PokemonDetail";
import { match } from "react-router";
import { gql, makeQuery } from "../helpers/apollo";
import * as Preview from "../queries/Preview";
import PokemonCard from "../components/PokemonCard";
import { find } from "lodash";

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

function Detail(props: { id: string }) {
  const { data, error, loading } = useQuery({
    variables: { id: props.id }
  });

  if (!data || !data.pokemon) {
    return null;
  }

  return <PokemonCard pokemon={data.pokemon} />;
}

export default function PokemonDetail(props: {
  match: match<{ number: string }>;
}) {
  const number = props.match.params.number;
  const { data, error, loading } = Preview.useQuery({
    variables: { first: Preview.pad(+number) }
  });
  if (!data || !data.pokemons) {
    return null;
  }

  const pokemon = find(data.pokemons, { number });
  if (pokemon == null) {
    return null;
  }

  return <Detail id={pokemon.id} />;
}
