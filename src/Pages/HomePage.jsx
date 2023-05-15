import React, { useState, useEffect } from "react";
import "../styles/homePage.css";
import axios from "axios";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);

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
    const timeOut = setTimeout(() => {
      searchValue && fetchMovies();
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
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
                width="200px"
                height="240px"
                src={
                  data.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBTSDdspF-1EtDKvyQL-k8iG7qNcQsxuKZA&usqp=CAU`
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
