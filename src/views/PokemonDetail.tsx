import React from "react";
import * as T from "./__generated__/PokemonDetail";
import { match } from "react-router";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import * as Preview from "../queries/Preview";

const QUERY = gql`
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
`;

function Detail(props: { id: string }) {
  const { data, error, loading } = useQuery<
    T.PokemonDetail,
    T.PokemonDetailVariables
  >(QUERY, {
    variables: { id: props.id }
  });

  if (!data || !data.pokemon) {
    return null;
  }

  const pokemon = data.pokemon;
  return (
    <figure>
      <img src={pokemon.image || ""} />
      <figcaption>
        {pokemon.number} &mdash; {pokemon.name}
      </figcaption>
    </figure>
  );
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
  const pokemon = data.pokemons.find(p => p != null && p.number === number);

  if (pokemon == null) {
    return null;
  }

  return <Detail id={pokemon.id} />;
}
