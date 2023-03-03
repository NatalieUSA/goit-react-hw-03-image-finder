import React from 'react';
import propTypes from 'prop-types';
import styles from './button.module.css';

export const Button = ({ loadMore }) => {
  return (
    <button type="button" className={styles.button} onClick={loadMore}>
      More
    </button>
  );
};

Button.propTypes = {
  loadMore: propTypes.func.isRequired,
};
