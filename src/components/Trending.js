import React, { useState, useEffect } from 'react';

import '../stylesheets/Trending.css';
import Nav from './Nav';
import MovieContainer from './MovieContainer';

const API_KEY = process.env.REACT_APP_API_KEY;

const Trending = ({ setFilm }) => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
      setTrending(data.results.slice(0, 8));
    });
  }, []);

  return (
    <div className="trending-container">
      <Nav />
      <div className="weekly-trending">
        <div className="weekly-title">TRENDING FILMS THIS WEEK</div>
        <div className="trending-movies">
          {trending.map((movie) =>
            <MovieContainer 
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              average={movie.vote_average}
              setFilm={setFilm}
            /> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Trending;