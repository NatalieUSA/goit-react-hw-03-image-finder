import { Component } from 'react';
import axios from 'axios';
import { SearchImages } from 'components/shared/servises/image-api';
// import styles from './image-finder.css';
import styles from '../styles/styles.module.css';
import { Loader } from 'components/shared/Loader/Loader';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/shared/Modal/Modal';
import { ModalItem } from 'components/ModalItem/ModalItem';

export class ImageFinder extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,

    showModal: false,
    modalItem: null,
  };

  //   componentDidUpdate(prevProps, prevState) {
  //     const { search, page } = this.state;
  //     if (prevState.search !== search || prevState.page !== page) {
  //       this.setState({ loading: true });
  //       axios
  //         .get(
  //           `https://pixabay.com/api/?key=32856813-557b11f28047fc34e33f2f2e2&q=${search}&per_page=3&webformatURL&largeImageURL&page=${page}`
  //         )

  //         .then(({ data }) => {
  //           const images = data.hits;
  //           this.setState(({ items }) => ({ items: [...items, ...images] }));
  //         })
  //         .catch(error => {
  //           this.setState({ error: error.message });
  //           console.log(error.message);
  //         })
  //         .finally(() => this.setState({ loading: false }));
  //     }
  //   }
  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPosts();
    }
  }

  async fetchPosts() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const response = await axios.get(
        `https://pixabay.com/api/?key=32856813-557b11f28047fc34e33f2f2e2&q=${search}&per_page=3&webformatURL&largeImageURL&page=${page}`
      );
      const data = response.data.hits;
      console.log(data);
      this.setState(({ items }) => ({ items: [...items, ...data] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showImage = ({ largeImageURL }) => {
    this.setState({
      modalItem: {
        largeImageURL,
      },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalItem: null,
      showModal: false,
    });
  };

  render() {
    const { items, loading, error, search, showModal, modalItem } = this.state;
    // const { largeImageURL } = items;
    const { searchImages, loadMore, showImage, closeModal } = this;

    return (
      <>
        {/* <Modal close={closeModal}>
          <ModalItem {...modalItem} items={largeImageURL} />
        </Modal> */}
        <Searchbar onSubmit={searchImages} />

        <ImageGallery>
          <ImageGalleryItem showImage={showImage} items={items} />
        </ImageGallery>

        {/* {loading && <p>...Loadeeer</p>} */}

        {/* <ul className={styles.gallery}>{elements}</ul> */}
        {Boolean(items.length) && (
          <button type="submit" className={styles.button} onClick={loadMore}>
            Load more
          </button>
        )}
        {loading && <Loader />}
        {error && (
          <p>
            ...Error ... somethig went wrong. Request failed with status code
            404
          </p>
        )}
        {!items.length && search && <p>empty results. Try one more search</p>}
        {showModal && (
          <Modal close={closeModal}>
            <ModalItem {...modalItem} />
          </Modal>
        )}
        {/* <p>...Loadeeer</p> */}
        {/* {loading && <p>...Load posts</p>} */}
        {/* <div className={styles.overlay}>
          <div className={styles.modal}>
            <img src="" alt="" />
          </div>
        </div> */}
      </>
    );
  }
}
