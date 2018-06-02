import { combineReducers } from 'redux';
// I can name it runners instead of runnersReducer because in /runnersReducer.js I have exported it as default
import runners from './runnersReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// Here I am using ES6 Short hand property name. Instead of runners: runners I can do only runners
const rootReducer = combineReducers({
  runners,
  ajaxCallsInProgress
});

export default rootReducer;
