import * as React from "react";

type Props = {
  pokemon: {
    id: string;
    // These nulls come from GraphQL... grumble grumble
    image: string | null;
    number: string | null;
    name: string | null;
  };
};

export default function PokemonCard({ pokemon }: Props) {
  return (
    <figure>
      <figcaption>
        <span>{pokemon.number}</span>
        <span>{pokemon.name}</span>
      </figcaption>
      <img src={pokemon.image || ""} />
    </figure>
  );
}
