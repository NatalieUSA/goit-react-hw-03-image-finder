// import styles from './modal-item.module.css';

export const ModalItem = ({ largeImageURL, tags }) => {
  //   console.log(items.largeImageURL);
  //   const { largeImageURL } = items;
  //   const { tags } = items;

  return (
    <div>
      <img src={largeImageURL} alt={tags} />
    </div>
  );
};

// ModalItem.defaultProps = {
//   items: [],
// };
// ModalItem();
