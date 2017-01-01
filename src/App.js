import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import TestComponent from './components/TestComponent';
import NotFound from './components/NotFound';
import Layout from './components/Layout'
import DefaultStyle from './static/css/default.css'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
        <IndexRoute component={TestComponent} />
        <Route path="styles" component={DefaultStyle} />
        <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

export default App
