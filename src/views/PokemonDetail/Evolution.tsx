import React from "react";
import { startCase } from "lodash";
import * as query from "./query";
import * as css from "../../css";

export default function Evolution(props: { identifier: string }) {
  const { data, error, loading } = query.use({
    variables: { identifier: props.identifier }
  });

  const evolution = query.extractEvolution(data);
  if (!evolution) {
    return null;
  }

  return (
    <div className={css.grid.row()}>
      {evolution.map(e => (
        <h2 key={e} className={css.grid.column()}>
          {startCase(e)}
        </h2>
      ))}
    </div>
  );
}
