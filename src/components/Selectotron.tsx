import * as React from "react";
import { style } from "typestyle";
import * as css from "../helpers/css";

const className = style({
  position: "relative",
  background: "black",
  maxWidth: "100%",
  overflowX: "scroll"
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
    <div className={`${className} ${css.displayFlex()}`}>
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
