import * as types from '../reduxActions/actionTypes';
import initialState from "./initialState";

// Here we are using ES6 default parameter to set a value to our state - state = []
export default function runnersReducer(state = initialState.runners, action) {
  switch (action.type) {
    case types.CREATE_RUNNER:
      // ... is ES6 spread operator (Spreading all runner objects that we have in our state which is a list of runner objects)
      // Here we are returning a new list with the current state runner objects + another immutable Object with the runner passed from the action.
      return [...state, Object.assign({}, action.savedRunner)];
    case types.UPDATE_RUNNER:
      // Here I am filtering out the runner with the same id as savedRunner.id
      // Then return an immutable Object with all the runners of the current state except of the filtered out runner, instead I update that runner with the savedRunner
      return [...state.filter(runner => runner.id !== action.savedRunner.id), Object.assign({}, action.savedRunner)];
    case types.LOAD_ALL_RUNNERS:
      return action.runners;
    default:
      return state;
  }
}
