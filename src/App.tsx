import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonPreview from "./views/PokemonPreview";
import PokemonDetail from "./views/PokemonDetail";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export function App() {
  return (
    <Router>
      <main>
        <Link to="/">Pokemon!</Link>
        <Switch>
          <Route path="/pokemon/:number" component={PokemonDetail} />
          <Route path="/" component={PokemonPreview} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
