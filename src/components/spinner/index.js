import React from 'react';
import styles from './styles.css';
import spinner from './spinner.png';

const Spinner = ({ isVisible }) => {
  return isVisible && (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <img src={spinner} className={styles.spinner} />
      </div>
    </div>
  );
};

Spinner.propTypes = {
  isVisible: React.PropTypes.bool.isRequired
};

export default Spinner;
