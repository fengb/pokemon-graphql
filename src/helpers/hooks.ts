import * as React from "react";

export function useEventListener(
  target: EventTarget,
  name: string,
  func: ((event: Event) => any) | null,
  deps?: React.DependencyList
) {
  React.useEffect(() => {
    if (func) {
      target.addEventListener(name, func);
      return () => target.removeEventListener(name, func);
    }
  }, deps);
}

export function useKeyDown(
  key: string,
  func: (event: Event) => any,
  deps?: React.DependencyList
) {
  function callback(event: Event) {
    if (event instanceof KeyboardEvent && event.key === key) {
      func(event);
    }
  }
  useEventListener(window, "keydown", callback, deps);
}

export function useDerivedState<S>(initial: S) {
  const [state, setState] = React.useState(initial);
  React.useEffect(() => setState(initial), [initial]);
  return [state, setState] as [S, React.Dispatch<React.SetStateAction<S>>];
}
