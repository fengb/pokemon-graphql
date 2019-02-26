import "./_globals";
import { style } from "typestyle";

import * as align from "./align";

export { align };

export function hidden() {
  return style({ visibility: "hidden" });
}
