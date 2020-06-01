import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import PokemonList from '../pages/PokemonList';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/list" component={PokemonList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
