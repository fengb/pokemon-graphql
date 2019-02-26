/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Preview
// ====================================================

export interface Preview_Pokemon_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface Preview_Pokemon_edges_node_sprites_normal_male {
  __typename: "PokemonSpriteOrientation";
  front: string | null;
}

export interface Preview_Pokemon_edges_node_sprites_normal {
  __typename: "PokemonSpriteGender";
  male: Preview_Pokemon_edges_node_sprites_normal_male | null;
}

export interface Preview_Pokemon_edges_node_sprites_silhouette_male {
  __typename: "PokemonSpriteOrientation";
  front: string | null;
}

export interface Preview_Pokemon_edges_node_sprites_silhouette {
  __typename: "PokemonSpriteGender";
  male: Preview_Pokemon_edges_node_sprites_silhouette_male | null;
}

export interface Preview_Pokemon_edges_node_sprites {
  __typename: "PokemonSprite";
  normal: Preview_Pokemon_edges_node_sprites_normal | null;
  silhouette: Preview_Pokemon_edges_node_sprites_silhouette | null;
}

export interface Preview_Pokemon_edges_node {
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
   * Returns a url to the requested pokemon's sprite.
   */
  sprites: Preview_Pokemon_edges_node_sprites | null;
}

export interface Preview_Pokemon_edges {
  __typename: "PokemonEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: Preview_Pokemon_edges_node | null;
}

export interface Preview_Pokemon {
  __typename: "PokemonConnection";
  /**
   * Returns the total number of nodes found by the query.
   */
  totalCount: number | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: Preview_Pokemon_pageInfo;
  /**
   * A list of edges.
   */
  edges: (Preview_Pokemon_edges | null)[] | null;
}

export interface Preview {
  Pokemon: Preview_Pokemon | null;
}

export interface PreviewVariables {
  first?: number | null;
  after?: string | null;
}
