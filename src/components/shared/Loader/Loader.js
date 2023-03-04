// import { Dna } from 'react-loader-spinner';

import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="100"
      width="100"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        height: '30vh',
        marginRight: 'auto',
        marginLeft: 'auto',
        display: 'flex',
      }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
  // <Dna

  //   visible={true}
  //   height="180"
  //   width="180"
  //   ariaLabel="dna-loading"
  //   wrapperStyle={{}}
  //   wrapperClass="dna-wrapper"
  // />
};
