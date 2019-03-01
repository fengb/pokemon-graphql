import React from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import * as css from "../../css";
import PreviewCard from "./PreviewCard";
import { compact, startCase } from "lodash";
import LazyHScroller from "../../components/LazyHScroller";
import Stats from "./Stats";
import PokemonTypes from "./PokemonTypes";
import { useDebouncedCallback } from "use-debounce";
import { useDerivedState, useKeyDown } from "../../helpers/hooks";
import POKEMON from "../../data/pokemons";

export default function PokemonDetail(
  props: RouteComponentProps<{ number: string }>
) {
  const [number, setNumber] = useDerivedState(+props.match.params.number);
  const [navigateTo, cancelNavigate] = useDebouncedCallback(
    (val: number) => props.history.replace(`/pokemon/${val}`),
    500,
    []
  );
  function setNumberWithCheck(val: number) {
    if (val > 0) {
      setNumber(val);
      navigateTo(val);
    }
  }
  useKeyDown("ArrowLeft", event => {
    setNumberWithCheck(number - 1);
    event.preventDefault();
  });
  useKeyDown("ArrowRight", event => {
    setNumberWithCheck(number + 1);
    event.preventDefault();
  });

  const selectedIndex = number - 1;
  const selectedPokemon = POKEMON[selectedIndex];

  return (
    <div>
      <LazyHScroller childWidth={96} childHeight={96} focus={selectedIndex}>
        {POKEMON.map((data, i) => (
          <Link key={data.identifier} to={`/pokemon/${i + 1}`}>
            <PreviewCard
              num={String(i + 1)}
              active={i == selectedIndex}
              imgUrl={data.img}
            />
          </Link>
        ))}
      </LazyHScroller>
      <div className={css.grid.container()}>
        <div className={css.grid.row()}>
          <h2 className={css.grid.column("auto")}>
            {startCase(selectedPokemon.identifier)}
          </h2>
          <div className={css.grid.column()}>
            <PokemonTypes identifier={selectedPokemon.identifier} />
          </div>
        </div>
        <div className={css.grid.row()} />
        <Stats identifier={selectedPokemon.identifier} />
      </div>
    </div>
  );
}
