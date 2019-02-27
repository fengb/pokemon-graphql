import * as React from "react";
import { style } from "typestyle";

const CLASSES = {
  root: style({
    position: "absolute",
    visibility: "hidden"
  })
};

export default function Follower(props: {
  target: HTMLElement | null;
  className?: string;
  onChange?: (el: HTMLElement) => any;
}) {
  const [style, setStyle] = React.useState({});
  React.useLayoutEffect(() => {
    if (props.target != null) {
      setStyle({
        visibility: "visible",
        left: `${props.target.offsetLeft}px`,
        top: `${props.target.offsetTop}px`,
        width: `${props.target.clientWidth}px`,
        height: `${props.target.clientHeight}px`
      });

      props.onChange && props.onChange(props.target);
    }
  }, [props.target]);

  return <div className={`${CLASSES.root} ${props.className}`} style={style} />;
}
