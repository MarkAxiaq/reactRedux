import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reduxReducers/runnersReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // applyMiddleware() is run before the store is updated.
    // Here reduxImmutableStateInvariant is helping us check that the store will be updated with an immutable object
    applyMiddleware(reduxImmutableStateInvariant())
  );
}

// To add State google visibility
