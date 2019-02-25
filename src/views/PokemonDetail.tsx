import React from "react";
import { gql } from "apollo-boost";
import * as T from "./__generated__/PokemonDetail";
import { makeQuery } from "../helpers/apollo";
import { match } from "react-router";

const Query = makeQuery<T.PokemonDetail, T.PokemonDetailVariables>(
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

export default function PokemonDetail(props: { match: match<{ id: string }> }) {
  return (
    <Query variables={{ id: props.match.params.id }}>
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
