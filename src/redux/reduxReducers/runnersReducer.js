import * as types from '../reduxActions/actionTypes';

// Here we are using ES6 default parameter to set a value to our state - state = []
export default function runnersReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_RUNNER:
      // ... is ES6 spread operator (Spreading all runner objects that we have in our state which is a list of runner objects)
      // Here we are returning a new list with the current state runner objects + another immutable Object with the runner passed from the action.
      return [...state, Object.assign({}, action.runner)];
    case types.LOAD_ALL_RUNNERS:
      return action.runners;
    default:
      return state;
  }
}
