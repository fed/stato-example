import React from 'react';
import {markItemAsDone, removeItem} from '../../state/actions';
import styles from '../styles.css';

export default class List extends React.Component {
  renderActiveItems() {
    return this.props.items
      .filter((item) => !item.isDone)
      .map((item) => (
        <li className={styles.itemActive} key={item.id}>
          {item.title}
          <button className={styles.buttonDone} onClick={() => markItemAsDone(item.id)}>Mark as done</button>
          <button className={styles.buttonRemove} onClick={() => removeItem(item.id)}>Remove</button>
        </li>
      ));
  }

  renderDoneItems() {
    return this.props.items
      .filter((item) => item.isDone)
      .map((item) => <li key={item.id} className={styles.itemDone}>{item.title}</li>);
  }

  render() {
    return (
      <div>
        <h2>Active Tasks</h2>
        <ul>{this.renderActiveItems()}</ul>

        <h2>Done</h2>
        <ul>{this.renderDoneItems()}</ul>
      </div>
    );
  }
}

List.propTypes = {
  items: React.PropTypes.array.isRequired
};
