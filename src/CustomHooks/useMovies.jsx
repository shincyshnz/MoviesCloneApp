import { useState } from "react";
import { TMDB_MOVIE_LIST_API, TMDB_SEARCH_API } from "../constants/TMDB_API";
import { useError } from "../context/ErrorContext";
import axios from "axios";

export const useMovies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const { errorObj, handleErrorObj } = useError();

  // Method 1: promise
  /////////////////////////////////////////

  // const getMoviesList = () => {
  //   fetch(TMDB_MOVIE_LIST_API)
  //     .then((response) => response.json())
  //     .then((data) => setMoviesList(data.results));
  // };

  // Method 2: Async and await
  /////////////////////////////////////////

  // const getMoviesList = async () => {
  //   const response = await fetch(TMDB_MOVIE_LIST_API);
  //   const data = await response.json();
  //   setMoviesList(data.results);
  // };

  // Method 3: Axios
  /////////////////////////////////////////

  const getMoviesList = async () => {
    try {
      const response = await axios(TMDB_MOVIE_LIST_API);
      setMoviesList(response.data?.results);
    } catch (error) {
      handleErrorObj("MovieList", error);
    }
  };

  const getFilteredMovieList = async (searchValue) => {
    try {
      const response = await axios(TMDB_SEARCH_API, {
        params: {
          query: searchValue,
        },
      });
      setFilteredMovieList(response.data?.results);
    } catch (error) {
      handleErrorObj("filteredMovieList", error);
    }
  };

  // useEffect(() => {
  //   getMoviesList();
  // }, []);

  return { moviesList, filteredMovieList, getMoviesList, getFilteredMovieList };
};
