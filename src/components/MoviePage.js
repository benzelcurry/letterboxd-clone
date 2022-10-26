import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import '../stylesheets/MoviePage.css';
import { createRoutesFromElements } from 'react-router-dom';

const API_SEARCH = process.env.REACT_APP_API_SEARCH;
const API_IMG = 'https://image.tmdb.org/t/p/original/';
const API_KEY = process.env.REACT_APP_API_KEY;

// GET CAST INFO TO DISPLAY ON PAGE
const MoviePage = ({ film, setFilm }) => {
  const [search, setSearch] = useState(null);
  const [info, setInfo] = useState({
    overview: null,
    filmID: null,
    backdrop: null,
    poster: null,
    average: null,
    release: null,
  })
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState(null);

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
      setCast([]);
      for (let i = 0; i < data.cast.length; i++) {
        setCast(current => [...current, data.cast[i].name])
      }
      for (let i = 0; i < data.crew.length; i++) {
        if (data.crew[i].known_for_department === 'Directing') {
          setDirector(data.crew[i].name);
        };
      };
      console.log(director)
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
            <div className="directed-by">Directed by 
              <div className='director'>{director}</div>
            </div>
          </div>
          <div>{info.overview}</div>
          <div className="people-container">
            <div className="people-title">Cast</div>
            <div className="cast-container">
              {cast.map((member) => {
                return (
                  <div className='cast-member' key={member}>
                    {member}
                  </div>
                )}
              )}
            </div>
          </div>
        </div>
        <div className="details-right">
          Sign up container will go here
          <div className='average-score'>
            Average Score: {info.average}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;