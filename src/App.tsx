import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import PokemonDetail from "./views/PokemonDetail";

export function App() {
  return (
    <Router>
      <main>
        <Link to="/">Pokemon!</Link>
        <Switch>
          <Route path="/pokemon/:number" component={PokemonDetail} />
          <Redirect exact from="/" to="/pokemon/1" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
