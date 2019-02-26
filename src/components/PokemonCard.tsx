import * as React from "react";
import { style } from "typestyle";
import * as css from "../helpers/css";

const className = style({
  width: "200px",
  height: "200px",
  background: "white",
  padding: "10px 20px"
});

function PokemonCard(props: { num: string; imgUrl: string }) {
  return (
    <figure className={`${className} ${css.displayFlex({ column: true })}`}>
      <figcaption>{props.num}</figcaption>
      <img className={css.flexGrow()} src={props.imgUrl} />
    </figure>
  );
}

PokemonCard.Placeholder = () => {
  return <figure className={`${className} ${css.hidden()}`} />;
};

export default PokemonCard;
