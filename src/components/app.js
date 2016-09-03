import React from 'react';

import List from './list';

import styles from './styles.css';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleKeyDown(event) {
    if (event.which === 13 && this.state.text) { // 13 == enter
      // todos.createItem(this.state.text);

      this.setState({
        text: ''
      });
    }
  }

  render() {
    return (
      <section>
        <header>
          <h1>An alternative to Flux for handling state using FRP</h1>
          <p>Example on how to use Bacon.js instead of Flux for unidirectional data flow and state handling on React apps. Please refer to the README file for more info on how this works.</p>
        </header>

        <input
          placeholder="What needs to get done?"
          className={styles.input}
          autoFocus={true}
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)} />

        <List items={this.props.items} />
      </section>
    );
  }
}

App.propTypes = {
  items: React.PropTypes.number.isRequired,
  filter: React.PropTypes.string.isRequired
};
