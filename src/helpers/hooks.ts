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
