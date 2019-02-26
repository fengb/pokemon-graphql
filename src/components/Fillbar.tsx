import * as React from "react";
import { style } from "typestyle";

const className = style({
  position: "relative",
});

const textClass = style({
  display: "inline-block",
  width: "40px",
  textAlign: "right",
  textShadow: "0 0 2px white",
  fontWeight: 600
})

const barClass = style({
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "lightgreen",
  zIndex: -1
});

export default function Fillbar(props: { size: number; max: number }) {
  const percent = Math.min(props.size / props.max, 1) * 100;
  return (
    <div className={className}>
      <span className={textClass}>{props.size}</span>
      <div className={barClass} style={{ width: `${percent}%` }} />
    </div>
  );
}
