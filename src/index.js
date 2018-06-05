/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/reduxStore/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadRunners} from './redux/reduxActions/runnersActions';
// import {loadAuthors} from './actions/authorActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
// import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
// Load Runners from the API immediately
store.dispatch(loadRunners());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
