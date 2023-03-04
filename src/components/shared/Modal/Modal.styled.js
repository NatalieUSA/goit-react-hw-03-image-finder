import styled from 'styled-components';

export const Overlay = styled.div`
   {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }
`;

export const ModalItem = styled.div`
   {
    max-width: calc(100vw - 200px);
    max-height: calc(100vh - 100px);
    position: absolute;
  }
`;

export const Close = styled.span`
   {
    color: deeppink;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    padding: 3px 10px;
    border-radius: 50px;
  }
`;
