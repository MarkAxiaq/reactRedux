import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reduxReducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware() is run before the store is updated.
    // Here reduxImmutableStateInvariant is helping us check that the store will be updated with an immutable object
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}

// To add State google visibility
