import React from 'react';
import ReactDOM from 'react-dom';
import Bacon from 'baconjs';
import App from './components/app';
import {toItemsProperty} from './utils/todos';

const initialState = [
  {
    id: 1472888296590,
    title: 'Grab a beer',
    isDone: true
  },
  {
    id: 1472888320728,
    title: 'Learn Bacon.js',
    isDone: false
  }
];

const items = toItemsProperty(initialState);

// These are the props that will get passed in to the <App /> component
const appState = Bacon.combineTemplate({
  items
});

appState.onValue((props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
});
