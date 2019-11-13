import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AreaList from '../pages/AreaList'
import Detail from '../pages/Detail'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/arealist">
            <AreaList />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}
