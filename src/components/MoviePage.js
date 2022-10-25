import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import '../stylesheets/MoviePage.css';

const API_SEARCH = process.env.REACT_APP_API_SEARCH;
const API_IMG = 'https://image.tmdb.org/t/p/original/';

const MoviePage = ({ film, setFilm }) => {
  const [search, setSearch] = useState(null);
  const [info, setInfo] = useState({
    overview: null,
    backdrop: null,
    poster: null,
    average: null,
    release: null,
  })

  useEffect(() => {
    const filmArr = film.split(' ');
    const filmQuery = filmArr.join('-');
    console.log(filmQuery);

    setSearch(API_SEARCH + filmQuery);
  }, [])

  useEffect(() => {
    fetch(search)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setInfo({
        overview: data.results[0].overview,
        backdrop: data.results[0].backdrop_path,
        poster: data.results[0].poster_path,
        average: data.results[0].vote_average,
        release: data.results[0].release_date
      })
    })
  }, [search]);

  return (
    <div className='info-container'>
      <Nav />
      <img src={API_IMG + info.backdrop} alt={`${film} backdrop`} className='film-backdrop' />
      <div className="details-container">
        <div className="details-left">
          <img src={API_IMG + info.poster} alt={`${film} poster`} className='film-poster' />
        </div>
        <div className="details-mid">
          <div className='film-title'>{film}</div>
          <p>{info.overview}</p>
          <p>{info.average}</p>
          <p>{info.release}</p>
        </div>
        <div className="details-right">
          Sign up container will go here
        </div>
      </div>
    </div>
  );
};

export default MoviePage;