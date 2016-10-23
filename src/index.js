import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {baconify} from '../lib/baconify';
import * as types from './reducers/types';

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

baconify(initialState, types, (props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
});
