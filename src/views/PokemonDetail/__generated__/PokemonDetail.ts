/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonDetail
// ====================================================

export interface PokemonDetail_Pokemon_edges_node_species_evolvesFromSpecies_evolvesFromSpecies {
  __typename: "PokemonSpecy";
  /**
   * Returns the id of the pokemon species.
   */
  id: string | null;
  /**
   * Returns the identifier of the pokemon species.
   */
  identifier: string | null;
}

export interface PokemonDetail_Pokemon_edges_node_species_evolvesFromSpecies {
  __typename: "PokemonSpecy";
  /**
   * Returns the id of the pokemon species.
   */
  id: string | null;
  /**
   * Returns the identifier of the pokemon species.
   */
  identifier: string | null;
  /**
   * Returns informaiton about the pokemon species that this pokemon species evolves from.
   */
  evolvesFromSpecies: PokemonDetail_Pokemon_edges_node_species_evolvesFromSpecies_evolvesFromSpecies | null;
}

export interface PokemonDetail_Pokemon_edges_node_species_evolvesIntoSpecies_evolvesIntoSpecies {
  __typename: "PokemonSpecy";
  /**
   * Returns the id of the pokemon species.
   */
  id: string | null;
  /**
   * Returns the identifier of the pokemon species.
   */
  identifier: string | null;
}

export interface PokemonDetail_Pokemon_edges_node_species_evolvesIntoSpecies {
  __typename: "PokemonSpecy";
  /**
   * Returns the id of the pokemon species.
   */
  id: string | null;
  /**
   * Returns the identifier of the pokemon species.
   */
  identifier: string | null;
  /**
   * Returns an array of pokemon species that this pokemon species can evolve into.
   */
  evolvesIntoSpecies: (PokemonDetail_Pokemon_edges_node_species_evolvesIntoSpecies_evolvesIntoSpecies | null)[] | null;
}

export interface PokemonDetail_Pokemon_edges_node_species {
  __typename: "PokemonSpecy";
  /**
   * Returns informaiton about the pokemon species that this pokemon species evolves from.
   */
  evolvesFromSpecies: PokemonDetail_Pokemon_edges_node_species_evolvesFromSpecies | null;
  /**
   * Returns an array of pokemon species that this pokemon species can evolve into.
   */
  evolvesIntoSpecies: (PokemonDetail_Pokemon_edges_node_species_evolvesIntoSpecies | null)[] | null;
}

export interface PokemonDetail_Pokemon_edges_node_pokemonTypes_type {
  __typename: "Type";
  id: string | null;
  identifier: string | null;
}

export interface PokemonDetail_Pokemon_edges_node_pokemonTypes {
  __typename: "PokemonType";
  type: PokemonDetail_Pokemon_edges_node_pokemonTypes_type | null;
}

export interface PokemonDetail_Pokemon_edges_node_pokemonStats_stat {
  __typename: "Stat";
  id: string | null;
  identifier: string | null;
}

export interface PokemonDetail_Pokemon_edges_node_pokemonStats {
  __typename: "PokemonStat";
  id: string | null;
  baseStat: number | null;
  stat: PokemonDetail_Pokemon_edges_node_pokemonStats_stat | null;
}

export interface PokemonDetail_Pokemon_edges_node {
  __typename: "Pokemon";
  /**
   * Returns the id of the pokemon.
   */
  id: string | null;
  /**
   * Returns the identifier of the pokemon.
   */
  identifier: string | null;
  species: PokemonDetail_Pokemon_edges_node_species | null;
  /**
   * Returns an array of the pokemon's type information.
   */
  pokemonTypes: (PokemonDetail_Pokemon_edges_node_pokemonTypes | null)[] | null;
  /**
   * Returns an array of the pokemon's stats.
   */
  pokemonStats: (PokemonDetail_Pokemon_edges_node_pokemonStats | null)[] | null;
}

export interface PokemonDetail_Pokemon_edges {
  __typename: "PokemonEdge";
  /**
   * The item at the end of the edge.
   */
  node: PokemonDetail_Pokemon_edges_node | null;
}

export interface PokemonDetail_Pokemon {
  __typename: "PokemonConnection";
  /**
   * A list of edges.
   */
  edges: (PokemonDetail_Pokemon_edges | null)[] | null;
}

export interface PokemonDetail {
  Pokemon: PokemonDetail_Pokemon | null;
}

export interface PokemonDetailVariables {
  identifier?: string | null;
}
