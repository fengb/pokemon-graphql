import React from "react";
import { Link } from "react-router-dom";
import { startCase, findIndex } from "lodash";
import { style } from "typestyle";
import * as query from "./query";
import * as css from "../../css";

const CLASSES = {
  root: style({}),
  current: style({}),
  from: style({
    position: "relative",
    display: "inline-block",
    $nest: {
      "&::after": {
        content: "'▸'"
      }
    }
  }),
  into: style({
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

  const from = query.extractEvolvesFrom(data);
  if (!from) {
    return null;
  }

  const into = query.extractEvolvesInto(data);
  if (!into) {
    return null;
  }

  return (
    <div
      className={`${css.grid.row({ hAlign: "center", vAlign: "baseline" })} ${
        CLASSES.root
      }`}
    >
      <div className={`${css.grid.column()} ${css.text.align("right")}`}>
        {from.reverse().map(e => (
          <Link
            to={`/pokemon/${e.id}`}
            key={e.identifier!}
            className={CLASSES.from}
          >
            {startCase(e.identifier!)}
          </Link>
        ))}
      </div>
      <div className={css.grid.column("auto")}>
        <h2 className={CLASSES.current}>{startCase(props.identifier)}</h2>
      </div>
      <div className={css.grid.column()}>
        {into.map((es, i) => (
          <div key={i} className={CLASSES.into}>
            {es.length === 1 ? (
              <Link to={`/pokemon/${es[0].id}`}>
                {startCase(es[0].identifier!)}
              </Link>
            ) : (
              "..."
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
