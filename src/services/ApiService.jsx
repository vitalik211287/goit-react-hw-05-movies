import axios from 'axios';

const apiConfig = {
  API_KEY: 'c95d6b2dfbce4a9f011c26eec4323125',
  API_BASE_URL: 'https://api.themoviedb.org/3/',
  TRENDING: '/trending/movie/day',
  SEARCH: 'search/movie',
  DETAILS: '/movie',
  ACTORS: '/movie',
  REVIEWS: '/movie',
};

axios.defaults.baseURL = apiConfig.API_BASE_URL;

const baseSearchParams = {
  api_key: apiConfig.API_KEY,
};
export async function getTrendingMovies() {
  try {
    const response = await axios.get(apiConfig.TRENDING, {
      params: { ...baseSearchParams},
    });
        return response.data.results;
  } catch (error) {
    console.log(error.message);
    }
   
}




export async function getSerchMovies(searchParams) {
  try {
    const response = await axios.get(apiConfig.SEARCH, {
      params: { ...baseSearchParams, query: searchParams },
    });
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

 export async function getSerchMoviesId(id){
   try {
     const response = await axios.get(`${apiConfig.DETAILS}/${id}`, {
       params: baseSearchParams,
     });
     return response.data;
   } catch (error) {
     console.log(error.message);
   }
 }
;
export async function getMovieActors(id) {
  try {
    const res = await axios.get(`${apiConfig.DETAILS}/${id}/credits`, {
      params: baseSearchParams,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function getMovieReviews(id) {
  try {
    const res = await axios.get(`${apiConfig.REVIEWS}/${id}/reviews`, {
      params: baseSearchParams,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}