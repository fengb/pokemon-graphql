import * as React from "react";
import { style } from "typestyle";
import MountedImage from "../../components/MountedImage";
import * as css from "../../css";

const CLASSES = {
  root: style({
    position: "relative"
  }),

  image: style({
    display: "block",
    transition: "0.2s ease all",
    width: "96px",
    height: "96px",
    border: "1px solid black",
    filter: "brightness(0.8) grayscale(1)",
    $nest: {
      "&:hover": {
        filter: "none"
      },
      "&.active": {
        filter: "none",
        borderWidth: "3px"
      }
    }
  }),

  number: style({
    position: "absolute",
    top: 0,
    right: 0,
    padding: "4px 6px",
    background: "rgba(255, 255, 255, 0.5)",
    border: "1px solid rgba(0, 0, 0, 0.5)"
  })
};

function PreviewCard(props: { num: string; imgUrl: string; active: boolean }) {
  return (
    <figure className={CLASSES.root}>
      <MountedImage
        className={`${CLASSES.image} ${props.active && "active"}`}
        src={props.imgUrl}
      />
      <figcaption className={CLASSES.number}>{props.num}</figcaption>
    </figure>
  );
}

PreviewCard.Placeholder = () => {
  return <figure className={`${CLASSES.root} ${css.hidden()}`} />;
};

export default PreviewCard;
