import { style } from "typestyle";

export function bricks() {
  return style({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  });
}

export function displayFlex({
  inline = false,
  column = false,
  apart = false
} = {}) {
  return style({
    display: inline ? "inline-flex" : "flex",
    flexDirection: column ? "column" : "row",
    justifyContent: apart ? "space-between" : "center"
  });
}

export function flexGrow(basis = "auto") {
  return style({
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: basis,
    height: 0
  });
}

export function flexFixed(basis = "auto") {
  return style({
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: basis
  });
}
