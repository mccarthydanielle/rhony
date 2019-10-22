import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './components/Contact';
import CastChart from './components/CastChart';
import FilterNav from './components/FilterNav';
import PageNotFound from './components/PageNotFound';

const Routes = props => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <FilterNav showFilterNav={props.showFilterNav} />}
        />
        <Route exact path="/cast" component={CastChart} />
        <Route
          exact
          path="/map"
          render={() => <FilterNav showFilterNav={props.showFilterNav} />}
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
