import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import '../stylesheets/Search.css';
import MovieContainer from './MovieContainer';

const Search = ({ setFilm, query, setQuery, searchQuery, setSearchQuery }) => {
  const API_SEARCH = process.env.REACT_APP_API_SEARCH;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [results, setResults] = useState([]);

  // {trending.map((movie) =>
  //   <MovieContainer 
  //     key={movie.id}
  //     filmID={movie.id}
  //     title={movie.title}
  //     poster={movie.poster_path}
  //     average={movie.vote_average.toFixed(1)}
  //     setFilm={setFilm}
  //     height='351'
  //     width='236'
  //   /> 
  // )}

  // will need to join queries by spaces and then separate with hyphens
  useEffect(() => {
    fetch(API_SEARCH + query)
    .then((response) => response.json())
    .then((data) => {
      let movieList = [];
      console.log(data);

      for (let i = 0; i < data.results.length; i++) {
        movieList.push(data.results[i]);
      };

      setResults(movieList);
      console.log(movieList);
    });
  }, [query]);

  return (
    <div className="search-page">
      <Nav query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      Your search query is: {query}
      {results.map((movie) => 
        <MovieContainer 
          key={movie.id}
          filmID={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          average={movie.vote_average}
          setFilm={setFilm}
          height='351'
          width='236'
        />
      )}
    </div>
  );
};

export default Search;