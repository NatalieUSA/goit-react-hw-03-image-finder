import propTypes from 'prop-types';
import style from './error-message.module.css';

export const ErrorMessage = ({ children }) => {
  return <h2 className={style.message}>{children}</h2>;
};

ErrorMessage.propTypes = {
  children: propTypes.node.isRequired,
};
