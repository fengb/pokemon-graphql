/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonTypes
// ====================================================

export interface PokemonTypes_Pokemon_edges_node_pokemonTypes_type {
  __typename: "Type";
  id: string | null;
  identifier: string | null;
}

export interface PokemonTypes_Pokemon_edges_node_pokemonTypes {
  __typename: "PokemonType";
  type: PokemonTypes_Pokemon_edges_node_pokemonTypes_type | null;
}

export interface PokemonTypes_Pokemon_edges_node {
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
   * Returns an array of the pokemon's type information.
   */
  pokemonTypes: (PokemonTypes_Pokemon_edges_node_pokemonTypes | null)[] | null;
}

export interface PokemonTypes_Pokemon_edges {
  __typename: "PokemonEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: PokemonTypes_Pokemon_edges_node | null;
}

export interface PokemonTypes_Pokemon {
  __typename: "PokemonConnection";
  /**
   * A list of edges.
   */
  edges: (PokemonTypes_Pokemon_edges | null)[] | null;
}

export interface PokemonTypes {
  Pokemon: PokemonTypes_Pokemon | null;
}

export interface PokemonTypesVariables {
  identifier?: string | null;
}
