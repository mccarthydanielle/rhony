import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyMap from './components/MyMap'
import FormSelection from './components/FormSelection'
import About from './components/About'
import Cast from './components/Cast'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MyMap} />
          <Route exact path="/cast" component={Cast} />
          <Route exact path="/map" component={MyMap} />
          <Route exact path="/contribute" component={FormSelection} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
