import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pokemons from "./queries/Pokemons";

export function App() {
  return (
    <Pokemons variables={{ first: 10 }}>
      {({ data }) => (
        <React.Fragment>
          <h1>Pokemons</h1>
          <code>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </code>
        </React.Fragment>
      )}
    </Pokemons>
  );
}

export default App;
