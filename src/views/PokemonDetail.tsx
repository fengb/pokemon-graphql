import React from "react";
import * as T from "./__generated__/PokemonDetail";
import { match } from "react-router";
import { gql, makeQuery } from "../helpers/apollo";
import * as Preview from "../queries/Preview";

export const Query = makeQuery<T.PokemonDetail, T.PokemonDetailVariables>(
  gql`
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
  `
);

function Detail(props: { id: string }) {
  return (
    <Query variables={{ id: props.id }}>
      {({ data }) => {
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
      }}
    </Query>
  );
}

export default function PokemonDetail(props: {
  match: match<{ number: string }>;
}) {
  const number = props.match.params.number;
  return (
    <Preview.Query variables={{ first: Number(number) }}>
      {({ data }) => {
        if (!data || !data.pokemons) {
          return null;
        }
        const pokemon = data.pokemons.find(
          p => p != null && p.number === number
        );

        if (pokemon == null) {
          return null;
        }

        return <Detail id={pokemon.id} />;
      }}
    </Preview.Query>
  );
}
