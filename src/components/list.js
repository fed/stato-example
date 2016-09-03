import React from 'react';
import {markItemAsDone, removeItem} from '../utils/todos';
import styles from './styles.css';

export default class List extends React.Component {
  handleClickDone(itemId) {
    // @TODO: remove this handler, implement inline
    markItemAsDone(itemId);
  }

  handleClickRemove(itemId) {
    // @TODO: remove this handler, implement inline
    removeItem(itemId);
  }

  renderActiveItems() {
    return this.props.items
      .filter((item) => !item.isDone)
      .map((item) => (
        <li className={styles.itemActive} key={item.id}>
          {item.title}
          <button className={styles.buttonDone} onClick={this.handleClickDone.bind(this, item.id)}>Mark as done</button>
          <button className={styles.buttonRemove} onClick={this.handleClickRemove.bind(this, item.id)}>Remove</button>
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
