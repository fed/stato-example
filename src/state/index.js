import {createItem, removeItem, markItemAsDone} from './items';
import {addCountry} from './countries';
import {CREATE_ITEM, REMOVE_ITEM, MARK_ITEM_AS_DONE, ADD_COUNTRY} from './types';

// Bind action types to reducers
export default function (actionType) {
  switch (actionType) {
    case CREATE_ITEM:
      return createItem;
    case REMOVE_ITEM:
      return removeItem;
    case MARK_ITEM_AS_DONE:
      return markItemAsDone;
    case ADD_COUNTRY:
      return addCountry;
    default:
      return (state) => state;
  }
}
