import * as React from "react";
import { startCase } from "lodash";
import * as query from "./query";
import Fillbar from "../../components/Fillbar";
import * as css from "../../css";

function colorFor(value: number) {
  if (value >= 150) {
    return "blue";
  } else if (value >= 100) {
    return "green";
  } else if (value >= 75) {
    return "yellow";
  } else if (value >= 50) {
    return "orange";
  } else {
    return "red";
  }
}

export default function Stats(props: { identifier: string }) {
  const { data, error, loading } = query.use({
    variables: { identifier: props.identifier }
  });

  const stats = query.extractStats(data);
  if (!stats) {
    return null;
  }

  return (
    <div>
      {stats.map((stat, i) => (
        <div className={css.grid.row()} key={stat.id || i}>
          <div
            className={`${css.grid.column("140px")} ${css.text.align("right")}`}
          >
            {startCase(stat.identifier!)}
          </div>
          <div className={css.grid.column()}>
            <Fillbar
              max={150}
              size={stat.baseValue || 0}
              barColor={colorFor(stat.baseValue || 0)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
