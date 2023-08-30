import { useState } from "react";
import {
  TMDB_MOVIE_LIST_API,
  TMDB_SEARCH_API,
  TMDB_VIDEO_API,
  API_KEY,
} from "../constants/TMDB_API";
import { useError } from "../context/ErrorContext";
import axios from "axios";

export const useMovies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState();
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
      handleErrorObj("MovieList", error.message);
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
      handleErrorObj("filteredMovieList", `${error.message}(${error.code})`);
    }
  };

  const getMovieTrailer = async (id) => {
    try {
      const data = await axios(
        `${TMDB_VIDEO_API}/${id}?api_key=${API_KEY}&append_to_response=videos,credits`
      );
      setMovieTrailer(data);
    } catch (error) {
      handleErrorObj("movieTrailer", error);
    }
  };

  return {
    moviesList,
    filteredMovieList,
    movieTrailer,
    getMoviesList,
    getFilteredMovieList,
    getMovieTrailer,
  };
};
