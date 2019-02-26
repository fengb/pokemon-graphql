import * as React from "react";
import { style } from "typestyle";
import * as css from "../helpers/css";

const className = style({
  width: "200px",
  height: "200px"
});

type Props = {
  pokemon: {
    id: string;
    // These nulls come from GraphQL... grumble grumble
    image: string | null;
    number: string | null;
    name: string | null;
  };
};

function PokemonCard({ pokemon }: Props) {
  return (
    <figure className={`${className} ${css.displayFlex({ column: true })}`}>
      <figcaption className={css.displayFlex({ apart: true })}>
        <span>{pokemon.number}</span>
        <span>{pokemon.name}</span>
      </figcaption>
      <img className={css.flexGrow()} src={pokemon.image || ""} />
    </figure>
  );
}

PokemonCard.Placeholder = () => {
  return <figure />;
};

export default PokemonCard;
