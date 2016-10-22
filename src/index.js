import React from 'react';
import ReactDOM from 'react-dom';
import Bacon from 'baconjs';
import App from './components/app';
import {toItemsProperty} from './utils/todos';
import {toCountriesProperty} from './utils/countries';

const initialState = {
  items: [
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
  ],
  countries: [
    'Australia',
    'New Zealand',
    'United Kingdom',
    'Ireland'
  ]
};

const items = toItemsProperty(initialState.items);
const countries = toCountriesProperty(initialState.countries);

// These are the props that will get passed in to the <App /> component
const appState = Bacon.combineTemplate({
  items,
  countries
});

appState.onValue((props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
});
