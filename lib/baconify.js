import Bacon from 'baconjs';
import store from './store';
import getReducer from '../src/reducers';

const types = [
  'CREATE_ITEM',
  'REMOVE_ITEM',
  'MARK_ITEM_AS_DONE',
  'ADD_COUNTRY'
];

// Binds Action Creators to Reducers
export function baconify(initialState, render) {
  return Bacon.update(
    initialState,
    [store.stream(types[0])], getReducer(types[0]),
    [store.stream(types[1])], getReducer(types[1]),
    [store.stream(types[2])], getReducer(types[2]),
    [store.stream(types[3])], getReducer(types[3])
  ).onValue((appState) => { render(appState); });
}
