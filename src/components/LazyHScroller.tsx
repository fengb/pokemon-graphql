import * as React from "react";
import { style } from "typestyle";
import { useEventListener } from "../helpers/hooks";

const CLASSES = {
  root: style({
    maxWidth: "100%",
    overflowX: "auto",
    scrollBehavior: "smooth"
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
  focus?: number;
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
  useEventListener(window, "resize", updateDimensions);
  useEventListener(ref.current, "scroll", updateDimensions);
  React.useEffect(() => {
    if (ref.current && props.focus != null) {
      ref.current.scrollLeft += viewportOffset(props.focus);
    }
  }, [ref.current, props.focus]);

  const scrollerStyle = {
    width: props.childWidth * props.children.length,
    height: props.childHeight
  };

  function viewportOffset(i: number) {
    if (viewportWidth == null || scrollLeft == null) {
      return 0;
    }
    const childLeft = props.childWidth * i;
    const childRight = childLeft + props.childWidth;
    if (childLeft < scrollLeft) {
      return childLeft - scrollLeft;
    } else if (childRight > scrollLeft + viewportWidth) {
      return childRight - scrollLeft - viewportWidth;
    } else {
      return 0;
    }
  }

  const BUFFER = viewportWidth || 0;
  const children = props.children.map((child, i) => {
    if (Math.abs(viewportOffset(i)) > BUFFER) {
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
