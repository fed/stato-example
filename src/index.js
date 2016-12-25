import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import baconify from 'baconify';
import store from './store';
import reducers from './reducers';

// Initial state for the application
const initialState = {
  loading: false,
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
  ],
  users: [],
  user: {}
};

// Initialise your application
baconify(initialState, store, reducers, (props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
});
