import * as React from "react";
import { throttle } from "lodash";
import { useEventListener } from "../helpers/hooks";

export function isInView(el: HTMLElement) {
  const bounds = el.getBoundingClientRect();
  return (
    bounds.left < window.innerWidth &&
    bounds.right > 0 &&
    bounds.top < window.innerHeight &&
    bounds.bottom > 0
  );
}

type Props = JSX.IntrinsicElements["img"];
export default function LazyImage({ src, ...imgProps }: Props) {
  const [imgSrc, setImgSrc] = React.useState<string | undefined>(undefined);
  const ref = React.useRef<HTMLImageElement>(null);

  let lazyLoad = throttle(function updateSrc() {
    if (!imgSrc && ref.current !== null && isInView(ref.current)) {
      setImgSrc(src);
    }
  }, 200);

  React.useLayoutEffect(lazyLoad, [ref.current]);
  useEventListener("mousewheel", lazyLoad);
  useEventListener("keyup", lazyLoad);

  return <img ref={ref} {...imgProps} src={imgSrc} />;
}
