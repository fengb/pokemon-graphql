import React from "react";
import { Link } from "react-router-dom";
import { startCase, findIndex } from "lodash";
import { style } from "typestyle";
import * as query from "./query";
import * as css from "../../css";

const CLASSES = {
  root: style({}),
  left: style({
    position: "relative",
    display: "inline-block",
    $nest: {
      "&::after": {
        content: "'▸'"
      }
    }
  }),
  right: style({
    position: "relative",
    display: "inline-block",
    $nest: {
      "&::before": {
        content: "'▸'"
      }
    }
  })
};

export default function Evolution(props: { identifier: string }) {
  const { data, error, loading } = query.use({
    variables: { identifier: props.identifier }
  });

  const evolution = query.extractEvolution(data);
  if (!evolution) {
    return null;
  }
  const center = findIndex(evolution, { identifier: props.identifier });
  const left = evolution.slice(0, center);
  const right = evolution.slice(center + 1, evolution.length);

  return (
    <div className={`${css.grid.row(true)} ${CLASSES.root}`}>
      <div className={`${css.grid.column()} ${css.text.align("right")}`}>
        {left.map(e => (
          <Link
            to={`/pokemon/${e.id}`}
            key={e.identifier!}
            className={CLASSES.left}
          >
            {startCase(e.identifier!)}
          </Link>
        ))}
      </div>
      <div className={css.grid.column("auto")}>
        <h2>{startCase(props.identifier)}</h2>
      </div>
      <div className={css.grid.column()}>
        {right.map(e => (
          <Link
            to={`/pokemon/${e.id}`}
            key={e.identifier!}
            className={CLASSES.right}
          >
            {startCase(e.identifier!)}
          </Link>
        ))}
      </div>
    </div>
  );
}
