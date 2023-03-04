import styled from 'styled-components';

export const Img = styled.img`
  max-width: calc(90vw - 150px);
  max-height: calc(90vh - 100px);

  @media (min-width: 768px) {
    max-width: calc(100vw - 200px);
    max-height: calc(100vh - 100px);
  }
`;
