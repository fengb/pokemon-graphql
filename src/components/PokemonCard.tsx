import * as React from "react";
import { style } from "typestyle";
import * as css from "../css";

const className = style({
  position: "relative",
  width: "96px",
  height: "96px",
  background: "white",
  border: "1px solid black"
});

const numberClass = style({
  position: "absolute",
  top: "0",
  right: "0",
  padding: "4px 6px",
  background: "rgba(255, 255, 255, 0.5)",
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.5)"
});

function PokemonCard(props: { num: string; imgUrl: string }) {
  return (
    <figure className={className}>
      <img src={props.imgUrl} />
      <figcaption className={numberClass}>{props.num}</figcaption>
    </figure>
  );
}

PokemonCard.Placeholder = () => {
  return <figure className={`${className} ${css.hidden()}`} />;
};

export default PokemonCard;
