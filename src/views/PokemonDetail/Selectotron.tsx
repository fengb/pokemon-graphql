import * as React from "react";
import { style } from "typestyle";
import { useKeyDown } from "../../helpers/hooks";

const className = style({
  position: "relative",
  background: "black",
  maxWidth: "100%",
  overflowX: "scroll",
  display: "flex"
});

const selectorClass = style({
  position: "absolute",
  pointerEvents: "none",
  boxShadow: "inset 0 0 0 3px black",
  visibility: "hidden"
});

export default function Selectotron(props: {
  selected: number;
  children: React.ReactElement[];
  selectPrev?: () => any;
  selectNext?: () => any;
}) {
  useKeyDown("ArrowLeft", event => {
    if (props.selectPrev) {
      props.selectPrev();
      event.preventDefault();
    }
  });
  useKeyDown("ArrowRight", event => {
    if (props.selectNext) {
      props.selectNext();
      event.preventDefault();
    }
  });
  const [selectorStyle, setSelectorStyle] = React.useState({});
  const selectedChild = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    const el = selectedChild.current;
    if (el != null) {
      setSelectorStyle({
        visibility: "visible",
        transition: "0.4s ease-out left",
        left: `${el.offsetLeft}px`,
        width: `${el.clientWidth}px`,
        height: `${el.clientHeight}px`
      });

      el.scrollIntoView();
    }
  }, [props.selected, selectedChild.current]);

  return (
    <div className={className}>
      {props.children.map((child, i) => (
        <div
          key={child.key || i}
          ref={i === props.selected ? selectedChild : null}
        >
          {child}
        </div>
      ))}
      <div className={selectorClass} style={selectorStyle} />
    </div>
  );
}
