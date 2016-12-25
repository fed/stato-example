import Bacon from 'baconjs';
import store from 'store';
import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  RECEIVE_USERS_LIST,
  RECEIVE_USER_DETAILS
} from 'actions';

export function loadUsers() {
  store.push(SHOW_SPINNER);

  const randomPage = Math.floor((Math.random() * 200) + 1);

  const ajaxCall = fetch(`//api.github.com/users?since=${randomPage}`)
    .then((response) => response.json());

  const usersListStream = Bacon
    .fromPromise(ajaxCall)
    .onValue((users) => {
      const slice = users.slice(0, 7);

      store.push(RECEIVE_USERS_LIST, slice);
      store.push(HIDE_SPINNER);
    });
}

export function fetchUserDetails(username) {
  store.push(SHOW_SPINNER);

  const ajaxCall = fetch(`//api.github.com/users/${username}`)
    .then((response) => response.json());

  const userDetailsStream = Bacon
    .fromPromise(ajaxCall)
    .onValue((user) => {
      store.push(RECEIVE_USER_DETAILS, user);
      store.push(HIDE_SPINNER);
    });
}
