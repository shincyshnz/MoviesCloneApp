import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import { useDebounce } from "../../CustomHooks/useDebounce";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("movies");
  const [searchList, setSearchList] = useState([]);
  const debouncedValue = useDebounce(searchValue, 500);

  const fetchMovies = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          query: searchValue,
        },
      });
      setSearchList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Debouncing
    searchValue && fetchMovies();
  }, [debouncedValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchValue("movies");
    setSearchList([]);
  };

  return (
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
        {searchList.map((data) => {
          return (
            <div className="movie-box" key={data.id}>
              <img
                className="movie-image"
                src={
                  data.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                    : `https://img.freepik.com/premium-vector/no-photo-available-vector-icon-default-image-symbol-picture-coming-soon-web-site-mobile-app_87543-10951.jpg?w=2000`
                }
                alt="movie poster"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};
