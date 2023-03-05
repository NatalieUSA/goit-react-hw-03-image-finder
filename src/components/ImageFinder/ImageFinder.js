import { Component } from 'react';
import { toast } from 'react-toastify';

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
    showBtn: false,
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

      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
      }));

      if (!data.total) {
        toast.error('No results were found for your search!');
      }

      this.setState({
        showBtn: this.state.page < Math.ceil(data.totalHits / 12),
      });
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(`Whoops, something went wrong ${error.message}`);
    } finally {
      this.setState({ loading: false });
    }
  }

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
    const { images, loading, error, showModal, modalItem, showBtn } =
      this.state;
    const { searchImages, loadMore, showImage, closeModal } = this;

    return (
      <>
        <Searchbar onSubmit={searchImages} />

        <ImageGallery>
          <ImageGalleryItem showImage={showImage} images={images} />
        </ImageGallery>

        {/* {Boolean(images.length) ||
          (images.length >= 30 && <Button onClick={loadMore} />)} */}

        {showBtn && <Button loadMore={loadMore} />}

        {loading && <Loader />}
        {error && (
          <ErrorMessage>
            ...Error ... somethig went wrong. Request failed with status code
            404
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
