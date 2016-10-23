import {createItem, removeItem, markItemAsDone} from './items';
import {addCountry} from './countries';

export default function (actionType) {
  switch (actionType) {
    case 'CREATE_ITEM':
      return createItem;
    case 'REMOVE_ITEM':
      return removeItem;
    case 'MARK_ITEM_AS_DONE':
      return markItemAsDone;
    case 'ADD_COUNTRY':
      return addCountry;
    default:
      return (state) => state;
  }
}
