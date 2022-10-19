import React from 'react';
const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieContainer = ({ title, poster, average, release, overview }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={API_IMG + poster} />
      <div className='average'>{average}</div>
      <div className='release-date'>{release}</div>
      <div className='overview'>{overview}</div>
    </div>
  );
};

export default MovieContainer;