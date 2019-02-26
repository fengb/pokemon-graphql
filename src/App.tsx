import * as React from "react";
import PokemonPreview from "./views/PokemonPreview";
import PokemonDetail from "./views/PokemonDetail";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { cssRule } from "typestyle";

cssRule("figure", {
  margin: 0
});

cssRule("img", {
  objectFit: "contain"
});

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
