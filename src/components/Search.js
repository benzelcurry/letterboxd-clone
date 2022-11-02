import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import '../stylesheets/Search.css';
import MovieContainer from './MovieContainer';

const Search = ({ setFilm, query, setQuery, searchQuery, setSearchQuery }) => {
  const API_SEARCH = process.env.REACT_APP_API_SEARCH;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [results, setResults] = useState([]);

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
      <div className='results'>
        {results.map((movie) => 
          <div className='results-container' key={movie.id}>
            <MovieContainer 
              filmID={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              average={movie.vote_average}
              setFilm={setFilm}
              height='111'
              width='76'
            />
            <div className="results-title">{movie.title}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;