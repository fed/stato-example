# Handling state with FRP instead of Flux on React Apps

![Example Screenshot](http://i.imgur.com/O56jhnE.jpg)

## Motivation and proposed Architecture

Just a lil bit of context first *re: functional reactive programming*. The most fundamental concept of [Functional Reactive Programming (FRP)](http://en.wikipedia.org/wiki/Functional_reactive_programming) is the **event stream**. Streams are like (immutable) arrays of events: they can be mapped, 
filtered, merged and combined. The difference between arrays and event streams is that values (events) of the event stream occur asynchronously. Every time an event occurs, it gets propagated through the stream and finally gets consumed by the subscriber.

We have Flux (and implementations like Redux) to handle our app state, and in fact they do a great job abstracting our views from the *business logic* and keeping our **data flow unidirectional**. However, Reactive programming is what React was made for. So, what if we delegate the app state handling to FRP libraries like Bacon.js or RxJS instead of using Redux? Well, that actually makes a lot of sense: 

1. Actions happen eventually and they propagate through event streams.
2. The combination of these event streams result in the app's state.
3. After an event has propagated through the system, the new state is consumed by the subscriber and rendered by the root level React component.

This makes the data flow dead simple:

![Application Architecture](http://i.imgur.com/57PHNjS.png)

The fundamental idea behind this approach is that every user-triggered action gets pushed to the appropriate event stream, which is then merged in to the **application state** stream. Events take place at different points in time, and they cause the application state to change. Finally the updated state triggers a re-render of the root component, and React's virtual DOM takes care of the rest :tada: This results in **dead simple, dumb** React views.

## What you need to do to start using `baconify`

1. Define your action **types**:

```js
export const ADD_COUNTRY = 'ADD_COUNTRY';
```

2. Create your **reducers**:

```js
export function addCountry(state, newCountry) {
  const countries = state.countries.concat([newCountry]);

  return assign({}, state, { countries });
}
```

3. Create your **initial state**:

```js
const initialState = {
  countries: ['Australia', 'New Zealand']
};
```

4. Initialise your application state:

```js
baconify(initialState, types, (props) => {
  ReactDOM.render(<App {...props} />, document.getElementById('app'));
});
```

## Development Tasks

| Command | Description |
|---------|-------------|
| `npm install` | Fetch dependencies and build binaries for any of the modules |
| `npm start` | Fire up Webpack Dev Server, app will go live on `http://localhost:6789` |
| `npm run build` | Build `bundle.js` file |

# Complementary Reading

* https://medium.com/@milankinen/good-bye-flux-welcome-bacon-rx-23c71abfb1a7
* http://blog.hertzen.com/post/102991359167/flux-inspired-reactive-data-flow-using-react-and
* http://www.aryweb.nl/2015/02/16/Reactive-React-using-reactive-streams/
