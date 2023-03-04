import propTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled.js';

export const ImageGallery = ({ children }) => {
  return <Gallery>{children}</Gallery>;
};

ImageGallery.propTypes = {
  children: propTypes.node.isRequired,
};
