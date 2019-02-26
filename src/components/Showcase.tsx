import * as React from "react";

export default function Showcase(props: { children: React.ReactElement[] }) {
  return <div>{props.children}</div>;
}
