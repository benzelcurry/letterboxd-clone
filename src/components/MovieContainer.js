// Creates clickable movie thumbnails that show poster, score, & redirect to dynamically created movie page

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/MovieContainer.css';

const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const API_URL = process.env.REACT_APP_API_URL

const MovieContainer = ({ filmID, title, poster, average, setFilm, height, width, fontsize }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  }

  const handleClick = (e) => {
    setFilm(filmID);
  }

  return (
    <div className='poster-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={e => handleClick(e)} 
         style={{ height: `${height}px`, width: `${width}px` }}>
      <Link to={`/films/info`} className='poster-container'>
        <img src={API_IMG + poster} alt='Movie poster' className='poster'
         style={{ height: `${height}px`, width: `${width}px` }}
        />
      </Link>
      { hover ?
        <div className='poster-average' style={{ fontSize: fontsize }}>Score: {average}</div>
        : null
      }
    </div>
  );
};

export default MovieContainer;