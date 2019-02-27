import * as React from "react";
import { style } from "typestyle";
import Follower, { useForcedRef } from "../../components/Follower";
import { useKeyDown } from "../../helpers/hooks";

const CLASSES = {
  root: style({
    position: "relative",
    background: "black",
    maxWidth: "100%",
    overflowX: "scroll",
    display: "flex"
  }),

  selector: style({
    pointerEvents: "none",
    boxShadow: "inset 0 0 0 3px black",
    transition: "0.3s ease left"
  })
};

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
  const selectedChild = useForcedRef<HTMLDivElement>(null);

  return (
    <div className={CLASSES.root}>
      {props.children.map((child, i) => (
        <div
          key={child.key || i}
          ref={i === props.selected ? selectedChild : null}
        >
          {child}
        </div>
      ))}
      <Follower
        className={CLASSES.selector}
        target={selectedChild.current}
        onChange={el => el && el.scrollIntoView()}
      />
    </div>
  );
}
