import { cssRule } from "typestyle";

cssRule("*", {
  boxSizing: "border-box",
  "-webkit-overflow-scrolling": "touch"
});

cssRule("html, body, h1, h2, h3, h4, h5, h6", {
  margin: 0,
  padding: 0
});

cssRule("figure", {
  margin: 0
});

cssRule("img", {
  objectFit: "contain"
});
