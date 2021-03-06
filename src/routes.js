import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import RunnersPage from './components/runners/RunnersPage';
import ManageRunnerPage from './components/manageRunner/ManageRunnerPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="runners" component={RunnersPage} />
    <Route path="manageRunner" component={ManageRunnerPage} />
    <Route path="manageRunner/:id" component={ManageRunnerPage} />
  </Route>
);
