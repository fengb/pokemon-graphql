/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonDetail
// ====================================================

export interface PokemonDetail_pokemon {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  /**
   * The classification of this Pokémon
   */
  classification: string | null;
  /**
   * The type(s) of this Pokémon
   */
  types: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon is resistant to
   */
  resistant: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon weak to
   */
  weaknesses: (string | null)[] | null;
  image: string | null;
}

export interface PokemonDetail {
  pokemon: PokemonDetail_pokemon | null;
}

export interface PokemonDetailVariables {
  id: string;
}
