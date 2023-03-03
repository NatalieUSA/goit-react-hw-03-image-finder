import styles from './image-gallery-item.module.css';

export const ImageGalleryItem = ({ items, showImage }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li key={id} className={styles.galleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => showImage({ largeImageURL })}
      />
      {/* <a href={largeImageURL}>
        <img src={webformatURL} alt={tags} />
      </a> */}
    </li>
  ));
  return elements;
};

ImageGalleryItem.defaultProps = {
  items: [],
};
