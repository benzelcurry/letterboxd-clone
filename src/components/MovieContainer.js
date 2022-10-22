import React, { useState } from 'react';

import '../stylesheets/MovieContainer.css';

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieContainer = ({ title, poster, average, release, overview }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  }

  return (
    <div className='poster-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {/* <h1>{title}</h1> */}
      <img src={API_IMG + poster} alt='Movie poster' className='poster'/>
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