import * as React from "react";

export function useEventListener(
  name: string,
  func: (event: Event) => void,
  target: EventTarget = window
) {
  React.useEffect(() => {
    target.addEventListener(name, func);
    return () => target.removeEventListener(name, func);
  });
}

export function useKeyDown(key: string, func: (event: Event) => any) {
  useEventListener("keydown", event => {
    if (event instanceof KeyboardEvent && event.key === key) {
      func(event);
    }
  });
}

/**
 * useRef will not trigger an update. This desyncs if the ref has been reassigned in the render.
 * useForcedRef will update until the ref is settled. Note: it's possible to infinite loop.
 */
export function useForcedRef<T>(initial = null) {
  const [, setState] = React.useState<T | null>(initial);
  const ref = React.useRef<T>(initial);
  React.useEffect(() => {
    // setState will trigger update iff current changed. This should settle on next render loop.
    setState(ref.current);
  });
  return ref;
}
