import propTypes from 'prop-types';
import { Message } from './ErrorMessage.styled';

export const ErrorMessage = ({ children }) => {
  return <Message>{children}</Message>;
};

ErrorMessage.propTypes = {
  children: propTypes.node.isRequired,
};
