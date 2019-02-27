import * as React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import PokemonDetail from "../views/PokemonDetail";

export { Link, HashRouter as default } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route path="/pokemon/:number" component={PokemonDetail} />
      <Redirect exact from="/" to="/pokemon/1" />
    </Switch>
  );
}
