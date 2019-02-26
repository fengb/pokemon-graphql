import React from "react";
import { Link } from "react-router-dom";
import * as Preview from "../queries/Preview";
import PokemonCard from "../components/PokemonCard";
import { compact } from "lodash";

export default function PokemonPreview({}) {
  const { data, error, loading } = Preview.useQuery({
    variables: { first: Preview.pad(10) }
  });

  if (!data || !data.pokemons) {
    return null;
  }

  const pokemons = compact(data.pokemons);

  return (
    <div>
      {pokemons.map(pokemon => (
        <Link to={`/pokemon/${pokemon.number}`}>
          <PokemonCard pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
}
