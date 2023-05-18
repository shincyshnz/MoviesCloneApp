import React, { useState, useEffect } from "react";
import "./home.css";
import { useDebounce } from "../../CustomHooks/useDebounce";
import { useMovies } from "../../CustomHooks/useMovies";
import { TMDB_IMAGE_URL, NO_IMAGE_URL } from "../../constants/TMDB_API";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 300);
  const { moviesList, filteredMovieList, getMoviesList, getFilteredMovieList } =
    useMovies();

  useEffect(() => {
    // Debouncing
    getMoviesList();
  }, [debouncedValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    getFilteredMovieList(event.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <>
      <div className="home-container">
        <div className="search-box">
          <img className="w-6 h-6" src="search.svg" alt="search-icon" />
          <input
            className="w-full outline-none"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleChange}
          />
          {searchValue && (
            <button onClick={clearSearch}>
              <img
                className="w-6 h-6"
                src="/src/assets/images/close.png"
                alt="search-icon"
              />
            </button>
          )}
        </div>
        <div className="movie-lists">
          {(searchValue ? filteredMovieList : moviesList).map((data) => {
            return (
              <div className="movie-box" key={data.id}>
                <img
                  className="movie-image"
                  src={
                    data.poster_path
                      ? `${TMDB_IMAGE_URL}${data.poster_path}`
                      : `${NO_IMAGE_URL}`
                  }
                  alt="movie poster"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
