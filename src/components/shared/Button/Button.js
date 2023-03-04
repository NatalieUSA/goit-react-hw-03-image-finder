import React from 'react';
import propTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <Btn type="button" onClick={loadMore}>
      More
    </Btn>
  );
};

Button.propTypes = {
  loadMore: propTypes.func.isRequired,
};
