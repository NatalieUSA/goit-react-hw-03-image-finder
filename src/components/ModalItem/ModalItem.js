import propTypes from 'prop-types';

export const ModalItem = ({ largeImageURL, tags }) => {
  return (
    <div>
      <img src={largeImageURL} alt={tags} />
    </div>
  );
};

ModalItem.propTypes = {
  largeImageURL: propTypes.string.isRequired,
  tags: propTypes.string,
};
