import Bacon from 'baconjs';
import remove from 'lodash/remove';
import assign from 'lodash/assign';
import Dispatcher from './dispatcher';

const dispatcher = new Dispatcher();

// Reducers
function createItemReducer(state, newItemTitle) {
  const items = state.items.concat([{
    id: Date.now(),
    title: newItemTitle,
    isDone: false
  }]);

  return assign({}, state, { items });
}

function removeItemReducer(state, itemId) {
  const items = state.items.slice();

  remove(items, (item) => item.id === itemId);

  return assign({}, state, { items });
}

function markItemAsDoneReducer(state, itemId) {
  const items = state.items.map((item) => {
    if (item.id === itemId) {
      item.isDone = true;
    }

    return item;
  });

  return assign({}, state, { items });
}

function addCountryReducer(state, newCountry) {
  const countries = state.countries.concat([newCountry]);

  return assign({}, state, { countries });
}

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
    [dispatcher.stream('create')], createItemReducer,
    [dispatcher.stream('remove')], removeItemReducer,
    [dispatcher.stream('done')], markItemAsDoneReducer,

    // Countries
    [dispatcher.stream('ADD_COUNTRY')], addCountryReducer
  );
}
