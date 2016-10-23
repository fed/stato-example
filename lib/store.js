import Bacon from 'baconjs';

const busCache = {};

class Store {
  stream(name) {
    return this.bus(name);
  }

  push(name, value) {
    this.bus(name).push(value);
  }

  plug(name, value) {
    this.bus(name).plug(value);
  }

  bus(name) {
    return busCache[name] = busCache[name] || new Bacon.Bus();
  }
}

const store = new Store();

export default store;
