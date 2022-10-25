import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/MovieContainer.css';

const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const API_URL = process.env.REACT_APP_API_URL

// MAKE THIS LESS CLUNKY BY RE-PULLING DATA FROM TMDB API INSTEAD OF USING STATE!!
const MovieContainer = ({ title, poster, average, release, overview, film, setFilm }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  }

  const handleClick = (e) => {
    setFilm(title);
  }

  return (
    <div className='poster-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={e => handleClick(e)}>
      {/* <h1>{title}</h1> */}
      <Link to={`/films/info`} className='poster-container'>
        <img src={API_IMG + poster} alt='Movie poster' className='poster'/>
      </Link>
      {/* <div className='average'>{average}</div>
      <div className='release-date'>{release}</div>
      <div className='overview'>{overview}</div> */}
      { hover ?
        <div className='poster-average'>Score: {average}</div>
        : null
      }
    </div>
  );
};

export default MovieContainer;