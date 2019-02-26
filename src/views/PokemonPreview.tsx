import React from "react";
import { Link } from "react-router-dom";
import * as Preview from "../queries/Preview";

function Render({ pokemon }: { pokemon: Preview.Pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.number}`}>
      <figure>
        <img src={pokemon.image || ""} />
        <figcaption>
          {pokemon.number} &mdash; {pokemon.name}
        </figcaption>
      </figure>
    </Link>
  );
}

export default function PokemonPreview({}) {
  const { data, error, loading } = Preview.useQuery({
    variables: { first: Preview.pad(10) }
  });

  if (!data || !data.pokemons) {
    return null;
  }

  return (
    <div>
      {data.pokemons.map(pokemon => pokemon && <Render pokemon={pokemon} />)}
    </div>
  );
}
