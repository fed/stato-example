import Bacon from 'baconjs';
import Dispatcher from '../utils/dispatcher';

const dispatcher = new Dispatcher();

// Reducers
function addCountryReducer(countries, newCountry) {
  return countries.concat([newCountry]);
}

// Actions
export function addCountry(title) {
  dispatcher.push('ADD_COUNTRY', title);
}

export function toCountriesProperty(initialItems) {
  return Bacon.update(
    initialItems,
    [dispatcher.stream('ADD_COUNTRY')], addCountryReducer
  );
}
