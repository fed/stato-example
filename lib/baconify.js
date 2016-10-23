import Bacon from 'baconjs';
import store from './store';
import getReducer from '../src/state';
import flatten from 'lodash/flatten';

// Binds Action Creators to Reducers
export function baconify(initialState, actionTypes, render) {
  const reducers = Object.keys(actionTypes).map((actionType) => {
    return [[store.stream(actionType)], getReducer(actionType)];
  });

  return Bacon.update(
    initialState,
    ...flatten(reducers)
  ).onValue((appState) => { render(appState); });
}
