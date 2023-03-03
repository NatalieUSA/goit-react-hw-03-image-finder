import propTypes from 'prop-types';

import styles from './image-gallery-item.module.css';

export const ImageGalleryItem = ({ images, showImage }) => {
  const elements = images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id} className={styles.galleryitem}>
      <img
        className={styles.galleryimage}
        src={webformatURL}
        alt={tags}
        onClick={() => showImage({ largeImageURL })}
      />
    </li>
  ));
  return elements;
};

ImageGalleryItem.defaultProps = {
  images: [],
};

ImageGalleryItem.propTypes = {
  showImage: propTypes.func.isRequired,
};
