import React from 'react';
import ReactDOM from 'react-dom';
import Bacon from 'baconjs';
import App from './components/app';

const items = Bacon.repeatedly(1000, [1, 2, 3, 4, 5]);
const filter = Bacon.fromArray(['A', 'B', 'C']);

// These are the props that will get passed in to the <App /> component
const appState = Bacon.combineTemplate({
  items,
  filter
});

appState.onValue((props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
});
