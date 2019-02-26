import * as React from "react";
import { style } from "typestyle";
import * as css from "../helpers/css";

const className = style({
  background: "black",
  maxWidth: "100%",
  overflowX: "scroll"
});

export default function Selectotron(props: { children: React.ReactElement[] }) {
  const center = Math.floor(props.children.length / 2);
  return (
    <div className={`${className} ${css.displayFlex()}`}>
      {props.children.map((child, i) => (
        <div key={child.key || i}>{child}</div>
      ))}
    </div>
  );
}
