import Bacon from 'baconjs';
import remove from 'lodash/remove';
import Dispatcher from '../utils/dispatcher';

const dispatcher = new Dispatcher();

// Reducers
function createItemReducer(items, newItemTitle) {
  return items.concat([{
    id: Date.now(),
    title: newItemTitle,
    isDone: false
  }]);
}

function removeItemReducer(items, itemId) {
  let updatedItems = items.slice();

  remove(updatedItems, (item) => item.id === itemId);

  return updatedItems;
}

function markItemAsDoneReducer(items, itemId) {
  return items.map((item) => {
    if (item.id === itemId) {
      item.isDone = true;
    }

    return item;
  });
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

export function toItemsProperty(initialItems) {
  return Bacon.update(
    initialItems,
    [dispatcher.stream('create')], createItemReducer,
    [dispatcher.stream('remove')], removeItemReducer,
    [dispatcher.stream('done')], markItemAsDoneReducer
  );
}
