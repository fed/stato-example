import React from 'react';
import store from 'store';
import {MARK_ITEM_AS_DONE, REMOVE_ITEM} from 'actions';
import styles from '../styles.css';

const renderActiveItems = (items) => {
  return items
    .filter((item) => !item.isDone)
    .map((item) => (
      <li className={styles.itemActive} key={item.id}>
        {item.title}
        <button className={styles.buttonDone} onClick={() => store.push(MARK_ITEM_AS_DONE, item.id)}>
          Mark as done
        </button>
        <button className={styles.buttonRemove} onClick={() => store.push(REMOVE_ITEM, item.id)}>
          Remove
        </button>
      </li>
    ));
};

const renderDoneItems = (items) => {
  return items
    .filter((item) => item.isDone)
    .map((item) => <li key={item.id} className={styles.itemDone}>{item.title}</li>);
};

const List = ({ items }) => (
  <div>
    <h2>Active Tasks</h2>
    <ul>{renderActiveItems(items)}</ul>

    <h2>Done</h2>
    <ul>{renderDoneItems(items)}</ul>
  </div>
);

List.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default List;
