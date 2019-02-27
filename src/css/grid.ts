import { style } from "typestyle";
import { px, percent } from "csx";
import { round } from "lodash";

const HALF_GUTTER = 8;

export function row() {
  return style({
    marginLeft: px(-HALF_GUTTER),
    marginRight: px(-HALF_GUTTER),
    display: "flex"
  });
}

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export function column(size: ColumnSize | string = "dynamic") {
  if (size === "dynamic") {
    return style({
      paddingLeft: px(HALF_GUTTER),
      paddingRight: px(HALF_GUTTER),
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0
    });
  } else {
    return style({
      paddingLeft: px(HALF_GUTTER),
      paddingRight: px(HALF_GUTTER),
      flexGrow: 0,
      flexShrink: 0,
      flexBasis:
        typeof size === "string" ? size : percent(round((100 * size) / 12, 4))
    });
  }
}
