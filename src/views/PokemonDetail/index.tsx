import React from "react";
// import * as T from "./__generated__/PokemonDetail";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
// import { gql, makeQuery } from "../helpers/apollo";
import * as Preview from "../../queries/Preview";
import PreviewCard from "./PreviewCard";
import { compact, startCase } from "lodash";
import Selectotron from "./Selectotron";
import Stats from "./Stats";

// const useQuery = makeQuery<T.PokemonDetail, T.PokemonDetailVariables>(gql`
//   query PokemonDetail($id: String!) {
//     pokemon(id: $id) {
//       id
//       number
//       name
//       classification
//       types
//       resistant
//       weaknesses
//       image
//     }
//   }
// `);

export default function PokemonDetail(
  props: RouteComponentProps<{ number: string }>
) {
  const number = props.match.params.number;
  const { data, error, loading } = Preview.useQuery({
    variables: { first: Preview.pad(+number + 1) }
  });
  if (!data || !data.Pokemon) {
    return null;
  }

  const pokemons = compact(data.Pokemon.edges);
  if (pokemons == null) {
    return null;
  }

  const selected = +number - 1;
  const selectedPokemon = pokemons[selected].node!;

  return (
    <div>
      <Selectotron
        selected={selected}
        selectPrev={() => props.history.push(`/pokemon/${+number - 1}`)}
        selectNext={() => props.history.push(`/pokemon/${+number + 1}`)}
      >
        {pokemons.map((pokemon, i) =>
          pokemon && pokemon.node ? (
            <Link key={pokemon.cursor} to={`/pokemon/${pokemon.node.id}`}>
              <PreviewCard
                num={pokemon.node.id!}
                active={i == selected}
                imgUrl={pokemon.node.sprites!.normal!.male!.front!}
              />
            </Link>
          ) : (
            <PreviewCard.Placeholder key={i} />
          )
        )}
      </Selectotron>
      <h2>{startCase(selectedPokemon.identifier!)}</h2>
      <Stats identifier={selectedPokemon.identifier!} />
    </div>
  );
}
