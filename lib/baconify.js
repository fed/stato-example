import Bacon from 'baconjs';

// Binds Action Creators to Reducers
export function baconify(initialState, render, ...reducers) {
  return Bacon.update(
    initialState,
    ...reducers
  ).onValue((appState) => { render(appState); });
}
