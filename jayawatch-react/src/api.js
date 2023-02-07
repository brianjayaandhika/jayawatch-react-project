import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = "https://api.themoviedb.org/3";

// GET movie list (20)
export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  console.log({ movieList: movie });
  return movie.data.results;
};

// GET movie by title
export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};

// GET movie by genre
export const getMovieByGenre = async (q) => {
  const genre = await axios.get(q);
  return;
};

// 4 API utk film
// 1. Munculin 15 trending movie
// 2. Show movie By Search
// 3. Show movie by Genre
