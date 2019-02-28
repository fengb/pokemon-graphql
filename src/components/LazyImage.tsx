import * as React from "react";
import { throttle } from "lodash";
import { useEventListener } from "../helpers/hooks";

export function isInView(el: Element) {
  const bounds = el.getBoundingClientRect();
  return (
    bounds.left < window.innerWidth &&
    bounds.right > 0 &&
    bounds.top < window.innerHeight &&
    bounds.bottom > 0
  );
}

const LAZY_HIDDEN = new Map<Element, (show: boolean) => any>();

const triggerLazyLoad = throttle(() => {
  for (const [el, setShow] of LAZY_HIDDEN.entries()) {
    if (isInView(el)) {
      setShow(true);
      LAZY_HIDDEN.delete(el);
    }
  };
}, 200);
window.addEventListener("mousewheel", triggerLazyLoad);
window.addEventListener("keyup", triggerLazyLoad);

type Props = JSX.IntrinsicElements["img"];
export default function LazyImage({ src, ...props }: Props) {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (show || ref.current == null) {
      return;
    }
    LAZY_HIDDEN.set(ref.current, setShow);
    triggerLazyLoad();
    return () => void LAZY_HIDDEN.delete(ref.current!);
  }, [ref.current]);

  return <img ref={ref} {...props} src={show ? src : undefined} />;
}
