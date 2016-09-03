import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1>An alternative to Flux for handling state using FRP</h1>
          <p>Example on how to use Bacon.js instead of Flux for unidirectional data flow and state handling on React apps. Please refer to the README file for more info on how this works.</p>
        </header>

        <ul>
          <li>Item: {this.props.items}</li>
          <li>Filter: {this.props.filter}</li>
        </ul>
      </section>
    );
  }
}

App.propTypes = {
  items: React.PropTypes.number.isRequired,
  filter: React.PropTypes.string.isRequired
};
