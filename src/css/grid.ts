import { style } from "typestyle";
import { px } from "csx";

const HALF_GUTTER = 8;

export function row() {
  return style({
    marginLeft: px(-HALF_GUTTER),
    marginRight: px(-HALF_GUTTER),
    display: "flex"
  });
}

export function column(size = 1) {
  return style({
    paddingLeft: px(HALF_GUTTER),
    paddingRight: px(HALF_GUTTER),
    flexGrow: size,
    flexShrink: size,
    flexBasis: `${size / 12 * 100}%`
  });
}

export function fixedColumn(width = "auto") {
  return style({
    paddingLeft: px(HALF_GUTTER),
    paddingRight: px(HALF_GUTTER),
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: width
  });
}
