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
    genres: null,
  })
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  const [writing, setWriting] = useState([]);
  const [director, setDirector] = useState(null);
  const [shown, setShown] = useState('cast');

  const handleClick = (e) => {
    setShown(e.target.id);
  }

  // Creates a link that can be used to search for film info based on film name
  useEffect(() => {
    const filmArr = film.split(' ');
    const filmQuery = filmArr.join('-');
    console.log(filmQuery);

    setSearch(API_SEARCH + filmQuery);
  }, [])

  // Pulls the genre IDs and correlated genres and sets them to a state variable
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US)`)
    .then((response) => response.json())
    .then((data) => {
      setGenres([]);
      for (let i = 0; i < data.genres.length; i++) {
        setGenres(current => [...current, data.genres[i]])
      }
    })
  }, [info])

  // Pulls film info and assigns to a state variable
  useEffect(() => {
    fetch(search)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let genreList = [];

      for (let i = 0; i < data.results[0].genre_ids.length; i++) {
        for (let j = 0; j < genres.length; j++) {
          if (data.results[0].genre_ids[i] === genres[j].id) {
            genreList.push(genres[j].name)
          }
        }
      }

      setInfo({
        overview: data.results[0].overview,
        filmID: data.results[0].id,
        backdrop: data.results[0].backdrop_path,
        poster: data.results[0].poster_path,
        average: data.results[0].vote_average,
        release: data.results[0].release_date.slice(0, 4),
        genres: genreList
      })

      console.log(`Genres: ${info.genres}`);
    })
  }, [search, shown]);

  // Pulls cast info and assigns to a state variable
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${info.filmID}/credits?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let writingArr = [];

      setCast([]);
      for (let i = 0; i < data.cast.length; i++) {
        setCast(current => [...current, data.cast[i].name])
      }
      for (let i = 0; i < data.crew.length; i++) {
        if (data.crew[i].known_for_department === 'Directing') {
          setDirector(data.crew[i].name);
        } else if (data.crew[i].known_for_department === 'Writing') {
          if (!writingArr.includes(data.crew[i].name)) {
            writingArr.push(data.crew[i].name);
          }
        };
      };
      setWriting(writingArr);

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
        <div className="film-title-container">
            <div className='film-title'>{film}</div>
            <div className="film-release">{info.release}</div>
            <div className="directed-by">Directed by 
              <div className='director'>{director}</div>
            </div>
          </div>
        <div className="details-mid">
          <div className='overview'>{info.overview}</div>
          <div className="people-container">
            <div className="people-options">
              <div id='cast' onClick={e => handleClick(e)}>Cast</div>
              <div id="crew" onClick={e => handleClick(e)}>Crew</div>
              <div id='genres' onClick={e => handleClick(e)}>Genres</div>
            </div>
            { (shown === 'cast') ?
              <div className="cast-container">
                {cast.map((member) => {
                  return (
                    <div className='cast-member' key={member}>
                      {member}
                    </div>
                  )}
                )}
              </div>
              : null
            }
          </div>
          { (shown === 'genres') ? 
            <div className='genres-list'>
              {info.genres.map((genre) => {
                return (
                  <div className='genre' key={genre}>
                    {genre}
                  </div>
                )}
              )}
            </div>
            : null
          }
          { (shown === 'crew') ?
            <div className="crew-list">
              {writing.map((member) => {
                return (
                  <div className="crew-member" key={member}> 
                    {member}
                  </div>
                )}
              )}
            </div>
            : null
          }
        </div>
        <div className="details-right">
          <div className="sign-up-box">
            <div className="review-half">Sign in to log, rate or review</div>
            <div className="share-half">Share</div>
          </div>
          <div className='average-score'>
            Average Score: {info.average} / 10
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;