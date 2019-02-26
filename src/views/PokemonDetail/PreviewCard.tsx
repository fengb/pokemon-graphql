import * as React from "react";
import { style } from "typestyle";
import * as css from "../../css";

const className = style({
  position: "relative",
  background: "white",
});

const imageClass = style({
  display: "block",
  transition: "0.2s ease all",
  width: "96px",
  height: "96px",
  border: "1px solid black",
  filter: "brightness(0.8) grayscale(1)",
  $nest: {
    "&:hover, &.active": {
      filter: "none"
    }
  }
});

const numberClass = style({
  position: "absolute",
  top: "0",
  right: "0",
  padding: "4px 6px",
  background: "rgba(255, 255, 255, 0.5)",
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.5)"
});

function PreviewCard(props: { num: string; imgUrl: string; active: boolean }) {
  return (
    <figure className={className}>
      <img
        className={`${imageClass} ${props.active && "active"}`}
        src={props.imgUrl}
      />
      <figcaption className={numberClass}>{props.num}</figcaption>
    </figure>
  );
}

PreviewCard.Placeholder = () => {
  return <figure className={`${className} ${css.hidden()}`} />;
};

export default PreviewCard;
