import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import '../stylesheets/MoviePage.css';

const API_SEARCH = process.env.REACT_APP_API_SEARCH;
const API_IMG = 'https://image.tmdb.org/t/p/original/';
const API_KEY = process.env.REACT_APP_API_KEY;

// GET CAST INFO TO DISPLAY ON PAGE
const MoviePage = ({ film, setFilm }) => {
  const [search, setSearch] = useState(null);
  const random = 'random';
  const [info, setInfo] = useState({
    overview: null,
    filmID: null,
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
        filmID: data.results[0].id,
        backdrop: data.results[0].backdrop_path,
        poster: data.results[0].poster_path,
        average: data.results[0].vote_average,
        release: data.results[0].release_date.slice(0, 4)
      })
    })
  }, [search]);

  // THIS PULLS CAST INFO
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${info.filmID}/credits?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
  }, [info]);

  return (
    <div className='info-container'>
      <Nav />
      <img src={API_IMG + info.backdrop} alt={`${film} backdrop`} className='film-backdrop' />
      <div className="details-container">
        <div className="details-left">
          <img src={API_IMG + info.poster} alt={`${film} poster`} className='film-poster' />
        </div>
        <div className="details-mid">
          <div className="film-title-container">
            <div className='film-title'>{film}</div>
            <div className="film-release">{info.release}</div>
          </div>
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