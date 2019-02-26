import * as React from "react";

export default function Showcase(props: { children: React.ReactChild[] }) {
  return <div>{props.children}</div>;
}
