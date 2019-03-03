import { style } from "typestyle";
import { percent } from "csx";
import { round } from "lodash";
import { JustifyContentProperty, AlignItemsProperty } from "csstype";

const HALF_GUTTER = 8;

export function container() {
  return style({
    maxWidth: 1152,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 2 * HALF_GUTTER,
    paddingRight: 2 * HALF_GUTTER
  });
}

export function row({
  hAlign = "initial",
  vAlign = "stretch"
}: {
  hAlign?: JustifyContentProperty;
  vAlign?: AlignItemsProperty;
} = {}) {
  return style({
    marginLeft: -HALF_GUTTER,
    marginRight: -HALF_GUTTER,
    display: "flex",
    justifyContent: hAlign,
    alignItems: vAlign
  });
}

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export function column(size: ColumnSize | "dynamic" | string = "dynamic") {
  if (size === "dynamic") {
    return style({
      paddingLeft: HALF_GUTTER,
      paddingRight: HALF_GUTTER,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0
    });
  } else {
    return style({
      paddingLeft: HALF_GUTTER,
      paddingRight: HALF_GUTTER,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis:
        typeof size === "string" ? size : percent(round((100 * size) / 12, 4))
    });
  }
}
