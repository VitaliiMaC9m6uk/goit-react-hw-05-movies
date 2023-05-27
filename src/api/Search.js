// const API_KEY = 'e03f5baf62035d5c2a9b07531dbf82b3';
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const TRENDING = '/trending/movie/week';

// export const getSearchFilm = (text, page) => {
//   return fetch(
//     `${BASE_URL}?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => response.json());
// };

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDNmNWJhZjYyMDM1ZDVjMmE5YjA3NTMxZGJmODJiMyIsInN1YiI6IjY0NmU1NmNlODk0ZWQ2MDBiZjc3MmU2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xf-th2toWSgCpCZyJEXOpxX7iubeE5CzozquTSstVdQ',
//   },
// };

// export const getTrendingFilm = (text, page) => {
//     return fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
//         .then(response => response.json())
// };
import axios from 'axios';

const API_KEY = 'e03f5baf62035d5c2a9b07531dbf82b3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
 export async function getTrendingFilm() {
   const { data } = await axios.get(`/trending/movie/week`, {
     params: { api_key: API_KEY },
   });
   return data.results;
 }