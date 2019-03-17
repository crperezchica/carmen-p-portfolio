import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ComingSoon from './ComingSoon';
import 'normalize.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={ComingSoon} />
          <Route exact path="/portfolio" compoent={ComingSoon} />
          <Route exact path="/contact" compoent={ComingSoon} />
        </Switch>
      </Router>
    );
  }
}
