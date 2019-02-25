/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Preview
// ====================================================

export interface Preview_pokemons {
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
  image: string | null;
}

export interface Preview {
  pokemons: (Preview_pokemons | null)[] | null;
}

export interface PreviewVariables {
  first: number;
}
