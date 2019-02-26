/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonStats
// ====================================================

export interface PokemonStats_Pokemon_edges_node_pokemonStats_stat {
  __typename: "Stat";
  id: string | null;
  identifier: string | null;
}

export interface PokemonStats_Pokemon_edges_node_pokemonStats {
  __typename: "PokemonStat";
  id: string | null;
  baseStat: number | null;
  stat: PokemonStats_Pokemon_edges_node_pokemonStats_stat | null;
}

export interface PokemonStats_Pokemon_edges_node {
  __typename: "Pokemon";
  /**
   * Returns the id of the pokemon.
   */
  id: string | null;
  /**
   * Returns the identifier of the pokemon.
   */
  identifier: string | null;
  /**
   * Returns an array of the pokemon's stats.
   */
  pokemonStats: (PokemonStats_Pokemon_edges_node_pokemonStats | null)[] | null;
}

export interface PokemonStats_Pokemon_edges {
  __typename: "PokemonEdge";
  /**
   * The item at the end of the edge.
   */
  node: PokemonStats_Pokemon_edges_node | null;
}

export interface PokemonStats_Pokemon {
  __typename: "PokemonConnection";
  /**
   * A list of edges.
   */
  edges: (PokemonStats_Pokemon_edges | null)[] | null;
}

export interface PokemonStats {
  Pokemon: PokemonStats_Pokemon | null;
}

export interface PokemonStatsVariables {
  identifier?: string | null;
}
