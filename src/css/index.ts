import "./_globals";
import { style } from "typestyle";

import * as align from "./align";
import * as grid from "./grid";
import * as text from "./text";

export { align, grid, text };

export function hidden() {
  return style({ visibility: "hidden" });
}
