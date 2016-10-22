import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {bindActionsToReducers} from './utils/update';

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

// These are the props that will get passed in to the <App /> component
const appState = bindActionsToReducers(initialState);

appState.onValue((props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
});
