import { cssRule } from "typestyle";

cssRule("*", {
  boxSizing: "border-box"
});

cssRule("html, body", {
  margin: 0,
  padding: 0
});

cssRule("figure", {
  margin: 0
});

cssRule("img", {
  objectFit: "contain"
});
