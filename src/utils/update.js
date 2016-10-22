import Bacon from 'baconjs';
import dispatcher from './dispatcher';
import * as reducers from '../reducers';

// Actions
export function createItem(title) {
  dispatcher.push('create', title);
}

export function removeItem(itemId) {
  dispatcher.push('remove', itemId);
}

export function markItemAsDone(itemId) {
  dispatcher.push('done', itemId);
}

export function addCountry(title) {
  dispatcher.push('ADD_COUNTRY', title);
}

export function bindActionsToReducers(initialItems) {
  return Bacon.update(
    initialItems,

    // To do items
    [dispatcher.stream('create')], reducers.createItem,
    [dispatcher.stream('remove')], reducers.removeItem,
    [dispatcher.stream('done')], reducers.markItemAsDone,

    // Countries
    [dispatcher.stream('ADD_COUNTRY')], reducers.addCountry
  );
}
