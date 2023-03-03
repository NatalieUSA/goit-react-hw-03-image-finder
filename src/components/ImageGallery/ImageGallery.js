import propTypes from 'prop-types';
import styles from './image-gallery.module.css';

export const ImageGallery = ({ children }) => {
  return <ul className={styles.gallery}>{children}</ul>;
};

ImageGallery.propTypes = {
  children: propTypes.node.isRequired,
};
