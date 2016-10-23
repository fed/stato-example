import React from 'react';
import {addCountry} from '../../state/actions';
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
    if (event.which === 13 && this.state.text) { // 13 == enter
      addCountry(this.state.text);

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
