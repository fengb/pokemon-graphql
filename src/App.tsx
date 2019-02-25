import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemonPreview from "./views/PokemonPreview";

export function App() {
  return (
    <main>
      <h1>Pokemon!</h1>
      <PokemonPreview />
    </main>
  );
}

export default App;
