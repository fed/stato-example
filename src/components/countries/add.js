import React from 'react';
import store from 'store';
import {ADD_COUNTRY} from 'actions';
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
      store.push(ADD_COUNTRY, this.state.text);

      this.setState({
        text: ''
      });
    }
  }

  render() {
    return (
      <input
        placeholder="Where else have you been to?"
        className={styles.input}
        value={this.state.text}
        onChange={this.handleTextChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)} />
    );
  }
}
