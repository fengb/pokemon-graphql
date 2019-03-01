import { compact, flatMap } from "lodash";
import * as T from "./__generated__/PokemonDetail";
import { gql, makeQuery } from "../../helpers/apollo";

export const use = makeQuery<T.PokemonDetail, T.PokemonDetailVariables>(gql`
  query PokemonDetail($identifier: String) {
    Pokemon(filter: { identifier: $identifier }) {
      edges {
        node {
          id
          identifier
          species {
            evolvesFromSpecies {
              id
              identifier
              evolvesFromSpecies {
                id
                identifier
              }
            }
            evolvesIntoSpecies {
              id
              identifier
              evolvesIntoSpecies {
                id
                identifier
              }
            }
          }
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

type PokemonBaseData = {
  id: string | null;
  identifier: string | null;
};

export function extractEvolvesFrom(
  detail?: T.PokemonDetail
): PokemonBaseData[] | null {
  const pokemon = extractPokemon(detail);
  if (!pokemon) {
    return null;
  }

  if (!pokemon.species) {
    return null;
  }

  const from: (PokemonBaseData | null)[] = [
    pokemon.species.evolvesFromSpecies,
    pokemon.species.evolvesFromSpecies &&
      pokemon.species.evolvesFromSpecies.evolvesFromSpecies
  ];

  return compact(from);
}

export function extractEvolvesInto(
  detail?: T.PokemonDetail
): PokemonBaseData[][] | null {
  const pokemon = extractPokemon(detail);
  if (!pokemon) {
    return null;
  }

  if (!pokemon.species) {
    return null;
  }

  const into = compact(pokemon.species.evolvesIntoSpecies);
  if (into.length === 0) {
    return [];
  }

  const intoInto = compact(flatMap(into, specy => specy.evolvesIntoSpecies));
  if (intoInto.length === 0) {
    return [into];
  }
  return [into, intoInto];
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
