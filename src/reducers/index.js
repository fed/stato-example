import remove from 'lodash/remove';
import assign from 'lodash/assign';
import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  CREATE_ITEM,
  REMOVE_ITEM,
  MARK_ITEM_AS_DONE,
  ADD_COUNTRY,
  RECEIVE_USERS_LIST,
  RECEIVE_USER_DETAILS
} from 'actions';

export default {

  // ---------------------------
  // Spinner
  // ---------------------------
  [SHOW_SPINNER]: (state) => {
    return assign({}, state, { loading: true });
  },

  [HIDE_SPINNER]: (state) => {
    return assign({}, state, { loading: false });
  },

  // ---------------------------
  // To do items
  // ---------------------------
  [CREATE_ITEM]: (state, newItemTitle) => {
    const items = state.items.concat([{
      id: Date.now(),
      title: newItemTitle,
      isDone: false
    }]);

    return assign({}, state, { items });
  },

  [REMOVE_ITEM]: (state, itemId) => {
    const items = state.items.slice();

    remove(items, (item) => item.id === itemId);

    return assign({}, state, { items });
  },

  [MARK_ITEM_AS_DONE]: (state, itemId) => {
    const items = state.items.map((item) => {
      if (item.id === itemId) {
        item.isDone = true;
      }

      return item;
    });

    return assign({}, state, { items });
  },

  // ---------------------------
  // Countries
  // ---------------------------
  [ADD_COUNTRY]: (state, newCountry) => {
    const countries = state.countries.concat([newCountry]);

    return assign({}, state, { countries });
  },

  // ---------------------------
  // GitHub Users
  // ---------------------------
  [RECEIVE_USERS_LIST]: (state, moreUsers) => {
    const users = state.users.concat([moreUsers]);

    return assign({}, state, { users });
  },

  [RECEIVE_USER_DETAILS]: (state, user) => {
    return assign({}, state, { user });
  }
}
