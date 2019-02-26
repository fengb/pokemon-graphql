import { style } from "typestyle";

export function align(textAlign: "left" | "center" | "right") {
  return style({ textAlign });
}
