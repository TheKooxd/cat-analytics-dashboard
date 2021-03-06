import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Overview from './components/pages/Overview/Overview';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import CatInfo from './components/pages/CatInfo/CatInfo';

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
        <IndexRoute component={Overview} />
        <Route path='cat-info/:name' component={CatInfo} />
        <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}
