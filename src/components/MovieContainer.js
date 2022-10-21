import React from 'react';

import '../stylesheets/MovieContainer.css';

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieContainer = ({ title, poster, average, release, overview }) => {
  return (
    <div className='poster-container'>
      {/* <h1>{title}</h1> */}
      <img src={API_IMG + poster} alt='Movie poster' className='poster'/>
      {/* <div className='average'>{average}</div>
      <div className='release-date'>{release}</div>
      <div className='overview'>{overview}</div> */}
    </div>
  );
};

export default MovieContainer;