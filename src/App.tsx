import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonPreview from "./views/PokemonPreview";
import { BrowserRouter as Router, Route, } from "react-router-dom";

export function App() {
  return (
    <main>
      <h1>Pokemon!</h1>
      <Router>
        <Route path="/" component={PokemonPreview} />
      </Router>
    </main>
  );
}

export default App;
