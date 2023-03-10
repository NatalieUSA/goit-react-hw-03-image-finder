import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Close, Overlay, ModalItem } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    console.log('Unmount');
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children, close } = this.props;
    const { closeModal } = this;

    return createPortal(
      <Overlay onClick={closeModal}>
        <ModalItem>
          <Close onClick={close}>X</Close>
          {children}
        </ModalItem>
      </Overlay>,
      modalRoot
    );
  }
}
