import * as React from "react";
import { compact } from "lodash";
import * as T from "./__generated__/PokemonTypes";
import { gql, makeQuery } from "../../helpers/apollo";

const useQuery = makeQuery<T.PokemonTypes, T.PokemonTypesVariables>(gql`
  query PokemonTypes($identifier: String) {
    Pokemon(filter: { identifier: $identifier }) {
      edges {
        cursor
        node {
          id
          identifier
          pokemonTypes {
            type {
              id
              identifier
            }
          }
        }
      }
    }
  }
`);

export default function PokemonTypes(props: { identifier: string }) {
  const { data, error, loading } = useQuery({
    variables: { identifier: props.identifier }
  });

  if (
    !data ||
    !data.Pokemon ||
    !data.Pokemon.edges ||
    !data.Pokemon.edges[0] ||
    !data.Pokemon.edges[0]!.node
  ) {
    return null;
  }

  const types = compact(data.Pokemon.edges[0]!.node.pokemonTypes);
  if (!types.length) {
    return null;
  }

  return (
    <div>
      {types.map(t => (
        <div>{t.type!.identifier}</div>
      ))}
    </div>
  );
}
