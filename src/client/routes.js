import React from 'react';
import { Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import CastChart from './components/CastChart';
import FilterNav from './components/FilterNav';

const Routes = props => {
  return (
    <div>
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
      <Route exact path="/about" component={About} />
    </div>
  );
};

export default Routes;
