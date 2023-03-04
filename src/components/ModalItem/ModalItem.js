import propTypes from 'prop-types';
import { Img } from './ModalItem.styled';

export const ModalItem = ({ largeImageURL, tags }) => {
  return (
    <div>
      <Img src={largeImageURL} alt={tags} />
    </div>
  );
};

ModalItem.propTypes = {
  largeImageURL: propTypes.string.isRequired,
  tags: propTypes.string,
};
