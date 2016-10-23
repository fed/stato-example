import remove from 'lodash/remove';
import assign from 'lodash/assign';

// To do items
export function createItem(state, newItemTitle) {
  const items = state.items.concat([{
    id: Date.now(),
    title: newItemTitle,
    isDone: false
  }]);

  return assign({}, state, { items });
}

export function removeItem(state, itemId) {
  const items = state.items.slice();

  remove(items, (item) => item.id === itemId);

  return assign({}, state, { items });
}

export function markItemAsDone(state, itemId) {
  const items = state.items.map((item) => {
    if (item.id === itemId) {
      item.isDone = true;
    }

    return item;
  });

  return assign({}, state, { items });
}

// Countries
export function addCountry(state, newCountry) {
  const countries = state.countries.concat([newCountry]);

  return assign({}, state, { countries });
}
