import * as React from "react";
import { style } from "typestyle";

const CLASSES = {
  root: style({
    maxWidth: "100%",
    overflowX: "auto"
  }),

  scroller: style({
    position: "relative"
  }),

  childWrapper: style({
    position: "absolute",
    top: "0",
    bottom: "0"
  })
};

export default function(props: {
  childWidth: number;
  childHeight: number;
  children: React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}) {
  const scrollerStyle = {
    width: props.childWidth * props.children.length,
    height: props.childHeight
  };
  const children = props.children.map((child, i) => {
    const childStyle = {
      width: props.childWidth,
      left: props.childWidth * i
    };
    return (
      <div
        key={child.key || i}
        className={CLASSES.childWrapper}
        style={childStyle}
      >
        {child}
      </div>
    );
  });
  return (
    <div className={`${CLASSES.root} ${props.className}`} style={props.style}>
      <div className={CLASSES.scroller} style={scrollerStyle}>
        {children}
      </div>
    </div>
  );
}
