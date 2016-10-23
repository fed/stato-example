import store from '../../lib/store';

// Actions
export function createItem(title) {
  store.push('CREATE_ITEM', title);
}

export function removeItem(itemId) {
  store.push('REMOVE_ITEM', itemId);
}

export function markItemAsDone(itemId) {
  store.push('MARK_ITEM_AS_DONE', itemId);
}

export function addCountry(title) {
  store.push('ADD_COUNTRY', title);
}
