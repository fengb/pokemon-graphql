import { style } from "typestyle";

export function absolute(position: "center") {
  return style({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  });
}
