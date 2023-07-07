import axios from 'axios';
const API_KEY = '959942d7ed3f5c96912a03c758c47388';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const TRENDING_PATH = '/trending/movie/day';

export const getTrengingMovies = page => {
  return axios(TRENDING_PATH, { params: { api_key: API_KEY, page } });
  
};
