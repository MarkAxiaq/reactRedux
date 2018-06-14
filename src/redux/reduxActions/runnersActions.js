import * as types from './actionTypes';
import api from '../../api/mockRunnerApi';

// Actions
export const createRunnerSuccess = (savedRunner) => {
  return { type: types.CREATE_RUNNER, savedRunner };
};

export const updateRunnerSuccess = (savedRunner) => {
  return { type: types.UPDATE_RUNNER, savedRunner };
};

export const onLoadRunnersSuccess = (runners) => {
  return { type: types.LOAD_ALL_RUNNERS, runners };
};

// Dispatch Actions
export function loadRunners() {
  return (dispatch) => {
    return api.getAllRunners().then(runners => {
      dispatch(onLoadRunnersSuccess(runners));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveRunner(runner) {
  return (dispatch, getState) => {
    return api.saveRunner(runner).then(savedRunner => {
      savedRunner.id ? dispatch(updateRunnerSuccess(savedRunner)): dispatch(createRunnerSuccess(savedRunner));
    }).catch(error => {
      throw(error);
    });
  };
}
