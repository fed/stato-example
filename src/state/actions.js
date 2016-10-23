import {store} from 'baconify';

export function showSpinner() {
  store.push('SHOW_SPINNER');
}

export function hideSpinner() {
  store.push('HIDE_SPINNER');
}

export function createItem(title) {
  store.push('SHOW_SPINNER');
  setTimeout(() => {
    store.push('CREATE_ITEM', title);
    store.push('HIDE_SPINNER');
  }, 1000);
}

export function removeItem(itemId) {
  store.push('REMOVE_ITEM', itemId);
}

export function markItemAsDone(itemId) {
  store.push('MARK_ITEM_AS_DONE', itemId);
}

export function addCountry(country) {
  store.push('SHOW_SPINNER');
  setTimeout(() => {
    store.push('ADD_COUNTRY', country);
    store.push('HIDE_SPINNER');
  }, 1000);
}
