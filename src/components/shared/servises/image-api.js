import axios from 'axios';

export const searchPhotos = async (search, page = 1) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api/?key=32856813-557b11f28047fc34e33f2f2e2&q=${search}&orientation=horizontal&per_page=12&webformatURL&largeImageURL&page=${page}`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
// export const searchPhotos = async (search, page = 1) => {
//   try {
//     const {
//       data: { hits },
//     } = await axios.get(
//       `https://pixabay.com/api/?key=32856813-557b11f28047fc34e33f2f2e2&q=${search}&orientation=horizontal&per_page=12&webformatURL&largeImageURL&page=${page}`
//     );
//     return hits;
//   } catch (error) {
//     return error.message;
//   }
// };

///////////////////////////////////

// export default async function searchPhotos(search, page = 1) {
//   try {
//     const {
//       data: { hits },
//     } = await axios.get(
//       `https://pixabay.com/api/?key=32856813-557b11f28047fc34e33f2f2e2&q=${search}&orientation=horizontal&per_page=12&webformatURL&largeImageURL&page=${page}`
//     );
//     return hits;
//   } catch (error) {
//     return error.message;
//   }
// }

// `https://pixabay.com/api/?key=32856813-557b11f28047fc34e33f2f2e2&q=${search}&per_page=6&webformatURL&largeImageURL`

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   KEY: '32856813-557b11f28047fc34e33f2f2e2',
//   params: { _per_page: 4, _page: 2 },
// });

// export const SearchImages = async (q, _page = 1) => {
//   const { data } = await instance.get('/', {
//     params: { q, _page },
//   });
//   return data;
// };

// // SearchImages();

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   KEY: '32856813-557b11f28047fc34e33f2f2e2',
//   params: { _per_page: 4, _page: 2 },
// });

// export const SearchImages = async (q, _page = 1) => {
//   const { data } = await instance.get('/random', {
//     params: { q, _page },
//   });
//   console.log(data);
//   //   return data;
// };
// SearchImages();

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   KEY: '32856813-557b11f28047fc34e33f2f2e2',
//   params: { _per_page: 4, _page: 2 },
// });

// export const SearchImages = async (q, _page = 1) => {
//   const { data } = await instance.get('/random', {
//     params: { q, _page },
//   });
//   console.log(data);
//   //   return data;
// };
// SearchImages();

// const KEY = '32856813-557b11f28047fc34e33f2f2e2';
// const BASE_URL = 'https://pixabay.com/api/';
// let page = 1;
// const perPage = 2;
