import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {baconify} from '../lib/baconify';
import store from '../lib/store';
import getReducer from './reducers';

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

baconify(initialState, (props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
},
  [store.stream('CREATE_ITEM')], getReducer('CREATE_ITEM'),
  [store.stream('REMOVE_ITEM')], getReducer('REMOVE_ITEM'),
  [store.stream('MARK_ITEM_AS_DONE')], getReducer('MARK_ITEM_AS_DONE'),
  [store.stream('ADD_COUNTRY')], getReducer('ADD_COUNTRY')
);
