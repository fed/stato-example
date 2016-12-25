import React from 'react';
import store from 'store';
import {SHOW_SPINNER, CREATE_ITEM, HIDE_SPINNER} from 'actions';
import {ENTER_KEY_CODE} from 'utils/constants';
import styles from '../styles.css';

export default class Create extends React.Component {
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
    if (event.which === ENTER_KEY_CODE && this.state.text) {
      store.push(SHOW_SPINNER); // triggers an action
      store.push(CREATE_ITEM, this.state.text); // triggers an action
      store.push(HIDE_SPINNER); // triggers an action

      this.setState({
        text: ''
      });
    }
  }

  render() {
    return (
      <input
        placeholder="What needs to get done?"
        className={styles.input}
        autoFocus={true}
        value={this.state.text}
        onChange={this.handleTextChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)} />
    );
  }
}
