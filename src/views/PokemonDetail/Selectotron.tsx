import * as React from "react";
import { style } from "typestyle";

const className = style({
  position: "relative",
  background: "black",
  maxWidth: "100%",
  overflowX: "scroll",
  display: "flex"
});

export default function Selectotron(props: {
  selected: number;
  children: React.ReactElement[];
}) {
  const [selectorStyle, setSelectorStyle] = React.useState({});
  const selectedChild = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = selectedChild.current;
    if (el != null) {
      setSelectorStyle({
        position: "absolute",
        boxShadow: "inset 0 0 0 3px black",
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
      <div style={selectorStyle} />
    </div>
  );
}
