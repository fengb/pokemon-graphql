import * as React from "react";
import Apollo from "./Apollo";
import Router, { Routes, Link } from "./Router";
import * as css from "../css";

export function App() {
  return (
    <main>
      <div className={css.grid.container()}>
        <h1>
          <Link to="/">Pokemon!</Link>
        </h1>
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
