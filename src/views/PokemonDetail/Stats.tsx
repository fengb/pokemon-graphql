import * as React from "react";
import { compact, startCase } from "lodash";
import * as T from "./__generated__/PokemonStats";
import { gql, makeQuery } from "../../helpers/apollo";
import Fillbar from "../../components/Fillbar";
import * as css from "../../css";

const useQuery = makeQuery<T.PokemonStats, T.PokemonStatsVariables>(gql`
  query PokemonStats($identifier: String) {
    Pokemon(filter: { identifier: $identifier }) {
      edges {
        node {
          id
          identifier
          pokemonStats {
            id
            baseStat
            stat {
              id
              identifier
            }
          }
        }
      }
    }
  }
`);

export default function(props: { identifier: string }) {
  const { data, error, loading } = useQuery({
    variables: { identifier: props.identifier }
  });

  if (
    !data ||
    !data.Pokemon ||
    !data.Pokemon.edges ||
    !data.Pokemon.edges[0] ||
    !data.Pokemon.edges[0]!.node
  ) {
    return null;
  }

  const stats = compact(data.Pokemon.edges[0]!.node.pokemonStats);
  if (!stats.length) {
    return null;
  }

  return (
    <div>
      {stats.map((stat, i) => (
        <div className={css.grid.row()} key={stat.id || i}>
          <div
            className={`${css.grid.fixedColumn("140px")} ${css.text.align(
              "right"
            )}`}
          >
            {startCase(stat.stat!.identifier!)}
          </div>
          <div className={css.grid.column()}>
            <Fillbar max={150} size={stat.baseStat || 0} />
          </div>
        </div>
      ))}
    </div>
  );
}
