import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;

// GET movie list (20) - used on Landing Page
export const getMovieList = async () => {
  const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

// // GET movie by title
// export const searchMovie = async (q) => {
//   const search = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=$${apiKey}&language=en-US&page=1&query=${q}&include_adult=false`);
//   return search.data.results;
// };

// 4 API utk film
// 1. Munculin 15 trending movie
// 2. Show movie By Search
// 3. Show movie by Genre
// 4. Utk Login
