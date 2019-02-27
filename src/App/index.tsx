import * as React from "react";
import Apollo from "./Apollo";
import Router, { Routes, Link } from "./Router";

export function App() {
  return (
    <main>
      <Link to="/">Pokemon!</Link>
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
