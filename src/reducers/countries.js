import assign from 'lodash/assign';

export function addCountry(state, newCountry) {
  const countries = state.countries.concat([newCountry]);

  return assign({}, state, { countries });
}
