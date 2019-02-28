import * as React from "react";
import { style } from "typestyle";
import { useEventListener } from "../helpers/hooks";

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
  const [viewportWidth, setViewPortWidth] = React.useState<number>();
  const [scrollLeft, setScrollLeft] = React.useState<number>();
  const ref = React.useRef<HTMLDivElement>(null);
  function updateDimensions() {
    if (ref.current) {
      setViewPortWidth(ref.current.clientWidth);
      setScrollLeft(ref.current.scrollLeft);
    }
  }
  React.useEffect(updateDimensions, [ref.current]);
  useEventListener(ref.current, "scroll", updateDimensions);

  const scrollerStyle = {
    width: props.childWidth * props.children.length,
    height: props.childHeight
  };

  function shouldRender(i: number) {
    if (viewportWidth == null || scrollLeft == null) {
      return false;
    }
    const childLeft = props.childWidth * i;
    const childRight = childLeft + props.childWidth;
    return childLeft < scrollLeft + viewportWidth && childRight > scrollLeft;
  }

  const children = props.children.map((child, i) => {
    if (!shouldRender(i)) {
      return null;
    }
    return (
      <div
        key={child.key || i}
        className={CLASSES.childWrapper}
        style={{ width: props.childWidth, left: props.childWidth * i }}
      >
        {child}
      </div>
    );
  });
  return (
    <div
      ref={ref}
      className={`${CLASSES.root} ${props.className}`}
      style={props.style}
    >
      <div className={CLASSES.scroller} style={scrollerStyle}>
        {children}
      </div>
    </div>
  );
}
