import { Dna } from 'react-loader-spinner';
import styles from './loader.module.css';

export const Loader = () => {
  return (
    <Dna
      className={styles.loader}
      visible={true}
      height="180"
      width="180"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};
