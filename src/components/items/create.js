import React from 'react';
import {createItem} from '../../utils/update';
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
      createItem(this.state.text);

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
