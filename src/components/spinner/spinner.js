import React from 'react';
import styles from './spinner.css';
import spinner from './spinner.png';

const Spinner = ({ isVisible }) => {
  if (isVisible) {
    return (
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <img src={spinner} className={styles.spinner} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

Spinner.propTypes = {
  isVisible: React.PropTypes.bool.isRequired
};

export default Spinner;
