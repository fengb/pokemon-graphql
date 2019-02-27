import * as React from "react";

const STYLES = {
  shared: { position: "absolute" } as React.CSSProperties,
  blank: { display: "none" } as React.CSSProperties
};

/**
 * useRef will not trigger an update. This desyncs if the ref has been reassigned in the render.
 * useForcedRef will update until the ref is settled. Note: it _might_ be able to infinite loop.
 */
export function useForcedRef<T>(initial = null) {
  const [, setState] = React.useState<T | null>(initial);
  const ref = React.useRef<T>(initial);
  React.useEffect(() => {
    // setState will trigger update iff `ref.current` changed. This should be a noop on next render loop.
    setState(ref.current);
  });
  return ref;
}

export default function Follower(props: {
  target: HTMLElement | null;
  className?: string;
  onChange?: (el: HTMLElement | null) => any;
  children?: React.ReactNode;
}) {
  const [style, setStyle] = React.useState(STYLES.blank);
  React.useEffect(() => {
    if (props.target == null) {
      setStyle(STYLES.blank);
    } else {
      setStyle({
        visibility: "visible",
        left: `${props.target.offsetLeft}px`,
        top: `${props.target.offsetTop}px`,
        width: `${props.target.clientWidth}px`,
        height: `${props.target.clientHeight}px`
      });
    }
    props.onChange && props.onChange(props.target);
  }, [props.target]);

  return (
    <div className={props.className} style={{ ...STYLES.shared, ...style }}>
      {props.children}
    </div>
  );
}
