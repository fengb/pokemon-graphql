import React from "react";
import { Link } from "react-router-dom";
import * as Preview from "../queries/Preview";

function Render({ pokemon }: { pokemon: Preview.Pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <figure>
        <img src={pokemon.image || ""} />
        <figcaption>
          {pokemon.number} &mdash; {pokemon.name}
        </figcaption>
      </figure>
    </Link>
  );
}

export default function PokemonPreview() {
  return (
    <Preview.Query variables={{ first: 10 }}>
      {({ data }) => {
        if (data) {
          return (data.pokemons || []).map(
            pokemon => pokemon && Render({ pokemon })
          );
        }
      }}
    </Preview.Query>
  );
}
