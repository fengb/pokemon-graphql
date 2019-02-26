import * as React from "react";
// import PokemonPreview from "./views/PokemonPreview";
import PokemonDetail from "./views/PokemonDetail";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

export function App() {
  return (
    <Router>
      <main>
        <Link to="/">Pokemon!</Link>
        <Switch>
          <Route path="/pokemon/:number" component={PokemonDetail} />
          <Redirect exact from="/" to="/pokemon/001" />
          {/* <Route path="/" component={PokemonPreview} /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
