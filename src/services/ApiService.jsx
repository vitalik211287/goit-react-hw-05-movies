import axios from 'axios';

const apiConfig = {
  API_KEY: '?api_key=c95d6b2dfbce4a9f011c26eec4323125',
  API_BASE_URL: 'https://api.themoviedb.org/3/',
  TRENDING: '/trending/movie/day',
  SEARCH: 'search/movie',
  DETAILS: '/movie',
  ACTORS: '/movie',
  REVIEWS: '/movie',
};

// const requestAPI = async () => {
//   try {
//     const res = await axios.get(`${API_BASE_URL}${API_KEY} `, apiConfig);
//   } catch (err) {
//     console.log(err);
//   }
// };

axios.defaults.baseURL = apiConfig.API_BASE_URL;

// const baseSearchParams = {
//   api_key: apiConfig.API_KEY,
// };
// const page = apiConfig.TRENDING + apiConfig.API_KEY;
export async function getTrendingMovies() {
  try {
    const response = await axios.get(apiConfig.TRENDING + apiConfig.API_KEY);
        return response.data.results;
  } catch (error) {
    console.log(error.message);
    }
   
}
console.log(getTrendingMovies().then(res => console.log(res))); 



export async function getSerchMovies(pageName) {
  try {
    const response = await axios
          .get(
        // `https://api.themoviedb.org/3/search/movie?api_key=c95d6b2dfbce4a9f011c26eec4323125&query=${pageName}`
          apiConfig.SEARCH + apiConfig.API_KEY + '&query=' + pageName
    );
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}
console.log(getSerchMovies().then(res => console.log(res))); 