import * as React from "react";
import { style } from "typestyle";
import * as css from "../helpers/css";

const className = style({
  background: "black"
});

function childClass(blur: number) {
  return style({
    transform: `scale(${1 - blur})`,
    opacity: 1 - blur
  });
}

export default function Showcase(props: { children: React.ReactElement[] }) {
  const center = Math.floor(props.children.length / 2);
  return (
    <div className={`${className} ${css.displayFlex()}`}>
      {props.children.map((child, i) => (
        <div
          key={child.key || i}
          className={childClass(Math.abs(i - center) / 5)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
