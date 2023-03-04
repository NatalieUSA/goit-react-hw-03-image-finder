import styled from 'styled-components';

export const GalleryItem = styled.li`
   {
    width: 100%;
    border-radius: 1px;
    border: 1px solid rgb(134, 133, 133);
  }

  :nth-child(5n) {
    grid-column: span 2;
    grid-row: span 2;
  }

  :nth-child(3n) {
    grid-row: span 2;
  }

  :nth-child(13n) {
    grid-row: span 2;
  }

  :nth-child(28n) {
    grid-column: span 3;
  }

  :nth-child(40n) {
    grid-column: span 3;
  }

  :nth-child(39n) {
    grid-row: span 3;
  }
`;

export const GalleryImage = styled.img`
   {
    width: 100%;
    height: 100%;
    border-radius: 1px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.2);
      cursor: zoom-in;
    }
  }
`;
