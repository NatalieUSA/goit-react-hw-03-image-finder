import propTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './iImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, showImage }) => {
  const elements = images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id}>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        onClick={() => showImage({ largeImageURL })}
      />
    </GalleryItem>
  ));
  return elements;
};

ImageGalleryItem.defaultProps = {
  images: [],
};

ImageGalleryItem.propTypes = {
  showImage: propTypes.func.isRequired,
};
