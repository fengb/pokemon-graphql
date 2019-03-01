import React from "react";
import { Link } from "react-router-dom";
import { chain } from "lodash";
import POKEMON from "../data/pokemons";
import { style } from "typestyle";
import { useDebouncedCallback } from "use-debounce";

const CLASSES = {
  root: style({
    position: "relative",
    display: "inline-block"
  }),

  results: style({
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "white",
    zIndex: 1,
    border: "1px solid black",
    borderTop: "none"
  }),

  resultItem: style({
    display: "block"
  })
};

function nope(event: { preventDefault: () => any }) {
  event.preventDefault();
}

function Results(props: { search: string }) {
  const results = chain(POKEMON)
    .filter(p => p.identifier.includes(props.search))
    .take(10)
    .value();

  return (
    <div className={CLASSES.results}>
      {results.map((r, i) => (
        <Link
          to={`/pokemon/${r.id}`}
          key={r.identifier || i}
          className={CLASSES.resultItem}
        >
          {r.identifier}
        </Link>
      ))}
    </div>
  );
}

export default function Search() {
  const [search, setSearch] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [delayHide, clearDelayHide] = useDebouncedCallback(
    () => setShow(false),
    100,
    []
  );
  return (
    <form
      className={CLASSES.root}
      onSubmit={nope}
      onFocus={() => setShow(true)}
    >
      <input
        value={search}
        onChange={event => setSearch(event.target.value)}
        onFocus={() => setShow(true)}
        onBlur={delayHide}
      />
      {show && <Results search={search} />}
    </form>
  );
}
