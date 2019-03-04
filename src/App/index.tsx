import * as React from "react";
import Apollo from "./Apollo";
import Router, { Routes, Link } from "./Router";
import Search from "./Search";
import * as css from "../css";

export function App() {
  return (
    <main>
      <div className={css.grid.container()}>
        <div className={css.grid.row({ hAlign: "space-between", vAlign: "baseline"})}>
          <h1 className={css.grid.column("auto")}>
            <Link to="/">Pokemon!</Link>
          </h1>
          <div className={css.grid.column("auto")}>
            <Search />
          </div>
        </div>
      </div>
      <Routes />
    </main>
  );
}

export default function() {
  return (
    <Apollo>
      <Router>
        <App />
      </Router>
    </Apollo>
  );
}
