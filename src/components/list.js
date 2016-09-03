import React from 'react';

import styles from './styles.css';

export default class List extends React.Component {
  render() {
    return (
      <div>
        <h2>To Do</h2>
        <ul>
          <li>Item: {this.props.items}</li>
          <li className={styles.itemActive}>Learn Bacon.js <button className={styles.buttonDone}>Mark as done</button> <button className={styles.buttonRemove}>Remove</button></li>
        </ul>

        <h2>Done</h2>
        <ul>
          <li className={styles.itemDone}>Learn Bacon.js</li>
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  items: React.PropTypes.number.isRequired
};
