import {Store} from 'stato';

// Instantiate application store
const store = new Store();

// Allows to trigger actions within the console
window.store = store;

export default store;
