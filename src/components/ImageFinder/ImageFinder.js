import { Component } from 'react';

import { Loader } from 'components/shared/Loader/Loader';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/shared/Modal/Modal';
import { ModalItem } from 'components/ModalItem/ModalItem';
import { Button } from 'components/shared/Button/Button';
import { ErrorMessage } from 'components/shared/ErrorMessage/ErrorMessage';

import { searchPhotos } from 'components/shared/servises/image-api';

export class ImageFinder extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
    page: 1,

    showModal: false,
    modalItem: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchPhotos();
    }
  }

  async fetchPhotos() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchPhotos(search, page);

      console.log(data);
      this.setState(({ images }) => ({ images: [...images, ...data] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     const { search, page } = this.state;
  //     if (prevState.search !== search || prevState.page !== page) {
  //       this.fetchPosts();
  //     }
  //   }

  //   async fetchPosts() {
  //     try {
  //       this.setState({ loading: true });
  //       const { search, page } = this.state;
  //       const response = await axios.get(
  //         `https://pixabay.com/api/?key=32856813-557b11f28047fc34e33f2f2e2&q=${search}&orientation=horizontal&per_page=12&webformatURL&largeImageURL&page=${page}`
  //       );
  //       const data = response.data.hits;
  //       console.log(data);
  //       this.setState(({ images }) => ({ images: [...images, ...data] }));
  //     } catch (error) {
  //       this.setState({ error: error.message });
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   }

  searchImages = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
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
    const { images, loading, error, search, showModal, modalItem } = this.state;
    const { searchImages, loadMore, showImage, closeModal } = this;

    return (
      <>
        <Searchbar onSubmit={searchImages} />

        <ImageGallery>
          <ImageGalleryItem showImage={showImage} images={images} />
        </ImageGallery>

        {Boolean(images.length) && <Button loadMore={loadMore} />}
        {/* {images.length > 0 || images.length !== 1 ? (
          <Button loadMore={loadMore} />
        ) : null} */}
        {loading && <Loader />}
        {error && (
          <ErrorMessage>
            ...Error ... somethig went wrong. Request failed with status code
            404
          </ErrorMessage>
        )}
        {!images.length && search && (
          <ErrorMessage>
            Sorry, there are no images matching your search query. Please try
            again.
          </ErrorMessage>
        )}
        {showModal && (
          <Modal close={closeModal}>
            <ModalItem {...modalItem} />
          </Modal>
        )}
      </>
    );
  }
}
