import React from "react";
import { Link } from "react-router-dom";
import * as Preview from "../queries/Preview";
import PokemonCard from "../components/PokemonCard";
import { compact } from "lodash";
import * as css from "../helpers/css";

export default function PokemonPreview({}) {
  const { data, error, loading } = Preview.useQuery({
    variables: { first: Preview.pad(10) }
  });

  if (!data || !data.pokemons) {
    return null;
  }

  const pokemons = compact(data.pokemons);

  return (
    <div className={css.bricks()}>
      {pokemons.map(pokemon => (
        <Link to={`/pokemon/${pokemon.number}`}>
          <PokemonCard pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
}
