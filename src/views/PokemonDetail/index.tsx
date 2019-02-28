import React from "react";
// import * as T from "./__generated__/PokemonDetail";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
// import { gql, makeQuery } from "../helpers/apollo";
import { relayFetchMerge } from "../../helpers/apollo";
import * as Preview from "../../queries/Preview";
import * as css from "../../css";
import PreviewCard from "./PreviewCard";
import { compact, startCase } from "lodash";
import Selectotron from "./Selectotron";
import LazyHScroller from "../../components/LazyHScroller";
import Stats from "./Stats";
import { useDebouncedCallback } from "use-debounce";
import { useDerivedState } from "../../helpers/hooks";

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
  const [number, setNumber] = useDerivedState(+props.match.params.number);
  const [navigateTo, cancelNavigate] = useDebouncedCallback(
    (val: number) => props.history.replace(`/pokemon/${val}`),
    500,
    []
  );
  function setNumberWithCheck(val: number) {
    if (val > 0) {
      setNumber(val);
      navigateTo(val);
    }
  }

  const { data, error, loading, fetchMore } = Preview.useQuery({
    variables: { first: 50 }
  });
  if (!data || !data.Pokemon) {
    return null;
  }

  if (!loading && data.Pokemon.pageInfo.hasNextPage) {
    fetchMore({
      variables: { first: 50, after: data.Pokemon.pageInfo.endCursor },
      updateQuery: relayFetchMerge("Pokemon")
    });
  }

  const pokemons = compact(data.Pokemon.edges);
  if (pokemons == null) {
    return null;
  }

  const selected = number - 1;
  const selectedPokemon = pokemons[selected].node!;

  return (
    <div>
      <LazyHScroller childWidth={96} childHeight={96}>
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
      </LazyHScroller>
      <div className={css.grid.container()}>
        <h2>{startCase(selectedPokemon.identifier!)}</h2>
        <Stats identifier={selectedPokemon.identifier!} />
      </div>
    </div>
  );
}
