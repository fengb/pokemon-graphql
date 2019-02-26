import React from "react";
import { Link } from "react-router-dom";
import * as Preview from "../queries/Preview";
import PokemonCard from "../components/PokemonCard";

export default function PokemonPreview({}) {
  const { data, error, loading } = Preview.useQuery({
    variables: { first: Preview.pad(10) }
  });

  if (!data || !data.pokemons) {
    return null;
  }

  return (
    <div>
      {data.pokemons.map(
        pokemon =>
          pokemon && (
            <Link to={`/pokemon/${pokemon.number}`}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          )
      )}
    </div>
  );
}
