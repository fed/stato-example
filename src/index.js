import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {baconify} from 'baconify';
import * as types from './state/types';
import reducers from './state/';

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

baconify(initialState, types, reducers, (props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
});
