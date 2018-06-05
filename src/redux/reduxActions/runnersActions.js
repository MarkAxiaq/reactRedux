import * as types from './actionTypes';
import api from '../../api/mockRunnerApi';

export function createRunner(runner) {
  return { type: types.CREATE_RUNNER, runner: runner };
}

export const onLoadRunnersSuccess = (runners) => {
  return { type: types.LOAD_ALL_RUNNERS, runners: runners };
};

export function loadRunners() {
  return (dispatch) => {
    return api.getAllRunners().then(runners => {
      dispatch(onLoadRunnersSuccess(runners));
    }).catch(error => {
      throw(error);
    });
  };
}
