import { compact } from "lodash";
import * as T from "./__generated__/PokemonDetail";
import { gql, makeQuery } from "../../helpers/apollo";

export const use = makeQuery<T.PokemonDetail, T.PokemonDetailVariables>(gql`
  query PokemonDetail($identifier: String) {
    Pokemon(filter: { identifier: $identifier }) {
      edges {
        node {
          id
          identifier
          pokemonTypes {
            type {
              id
              identifier
            }
          }
          pokemonStats {
            id
            baseStat
            stat {
              id
              identifier
            }
          }
        }
      }
    }
  }
`);

function extractPokemon(detail?: T.PokemonDetail) {
  if (
    !detail ||
    !detail.Pokemon ||
    !detail.Pokemon.edges ||
    !detail.Pokemon.edges[0]
  ) {
    return null;
  }
  return detail.Pokemon.edges[0]!.node;
}

export function extractStats(detail?: T.PokemonDetail) {
  const pokemon = extractPokemon(detail);
  if (!pokemon) {
    return null;
  }

  const stats = compact(pokemon.pokemonStats);
  if (!stats.length) {
    return null;
  }

  return stats.map(s => {
    return {
      ...s.stat!,
      baseValue: s.baseStat
    };
  });
}

export function extractTypes(detail?: T.PokemonDetail) {
  const pokemon = extractPokemon(detail);
  if (!pokemon) {
    return null;
  }

  const types = compact(pokemon.pokemonTypes);
  if (!types.length) {
    return null;
  }

  return types.map(t => t.type!);
}
