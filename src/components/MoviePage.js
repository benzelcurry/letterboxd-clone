// Displays dynamic movie pages with movie info (title, poster, release date, overview, cast, etc.)

import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import '../stylesheets/MoviePage.css';
import { createRoutesFromElements } from 'react-router-dom';

const API_SEARCH = process.env.REACT_APP_API_SEARCH;
const API_IMG = 'https://image.tmdb.org/t/p/original/';
const API_KEY = process.env.REACT_APP_API_KEY;

const MoviePage = ({ film, setFilm, query, setQuery, searchQuery, setSearchQuery }) => {
  const [search, setSearch] = useState(null);
  const [info, setInfo] = useState({
    title: null,
    overview: null,
    filmID: null,
    backdrop: null,
    poster: null,
    average: null,
    release: null,
    genres: null,
  })

  const [cast, setCast] = useState([]);
  const [writing, setWriting] = useState([]);
  const [production, setProduction] = useState([]);
  const [makeup, setMakeup] = useState([]);
  const [camera, setCamera] = useState([]);
  const [art, setArt] = useState([]);
  const [fx, setFx] = useState([]);
  const [sound, setSound] = useState([]);
  const [lighting, setLighting] = useState([]);
  const [editing, setEditing] = useState([]);
  const [directing, setDirecting] = useState([]);
  const [director, setDirector] = useState([]);
  const [misc, setMisc] = useState([]);
  const [studios, setStudios] = useState([]);
  const [country, setCountry] = useState([]);
  const [spoken, setSpoken] = useState([]);
  const [altTitle, setAltTitle] = useState(null);
  const [runtime, setRuntime] = useState([]);
  const [tagline, setTagline] = useState(null);
  const [shown, setShown] = useState('cast');

  const handleClick = (e) => {
    setShown(e.target.id);
  }

  // Pulls film info and assigns to a state variable
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${film}?api_key=${API_KEY}&language=en-US)`)
    .then((response) => response.json())
    .then((data) => {
      let genreList = [];
      console.log(data);

      for (let i = 0; i < data.genres.length; i++) {
        genreList.push(data.genres[i].name);
      }

      setInfo({
        title: data.title,
        overview: data.overview,
        filmID: data.id,
        backdrop: data.backdrop_path,
        poster: data.poster_path,
        average: data.vote_average.toFixed(1),
        release: data.release_date.slice(0, 4),
        genres: genreList
      })
    })
  }, [search, shown]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${info.filmID}?api_key=${API_KEY}&language=en-US)`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let studiosArr = [];
      let countriesArr = [];
      let spokenArr = [];

      for (let i = 0; i < data.production_companies.length; i++) {
        studiosArr.push(data.production_companies[i].name);
      }

      for (let i = 0; i < data.production_countries.length; i++) {
        countriesArr.push(data.production_countries[i].iso_3166_1);
      }

      for (let i = 0; i < data.spoken_languages.length; i++) {
        spokenArr.push(data.spoken_languages[i].english_name);
      }

      setStudios(studiosArr);
      setCountry(countriesArr);
      setSpoken(spokenArr);
      setAltTitle(data.original_title);
      setRuntime(data.runtime);
      setTagline(data.tagline);
    })
  }, [info]);

  // Pulls cast and crew info and assigns to a state variable
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${info.filmID}/credits?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {

      let directors = [];
      let writingArr = [];
      let productionArr = [];
      let makeupArr = [];
      let cameraArr = [];
      let artArr = [];
      let fxArr = [];
      let soundArr = [];
      let lightingArr = [];
      let editingArr = [];
      let directingArr = [];
      let miscArr = [];

      setCast([]);
      for (let i = 0; i < data.cast.length; i++) {
        setCast(current => [...current, data.cast[i].name])
      }

      for (let i = 0; i < data.crew.length; i++) {
        if (data.crew[i].known_for_department === 'Directing') {
          if (data.crew[i].job === 'Director') {
            directors.push(data.crew[i].name)
          }
          if (!directingArr.includes(data.crew[i].name)) {
            directingArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Writing') {
          if (!writingArr.includes(data.crew[i].name)) {
            writingArr.push(data.crew[i].name);
          }
        } else if (data.crew[i].known_for_department === 'Production') {
          if (!productionArr.includes(data.crew[i].name)) {
            productionArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Costume & Make-Up') {
          if (!makeupArr.includes(data.crew[i].name)) {
            makeupArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Camera') {
          if (!cameraArr.includes(data.crew[i].name)) {
            cameraArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Art') {
          if (!artArr.includes(data.crew[i].name)) {
            artArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Visual Effects') {
          if (!fxArr.includes(data.crew[i].name)) {
            fxArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Sound') {
          if (!soundArr.includes(data.crew[i].name)) {
            soundArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Lighting') {
          if (!lightingArr.includes(data.crew[i].name)) {
            lightingArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Directing') {
          if (!directingArr.includes(data.crew[i].name)) {
            directingArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Editing') {
          if (!editingArr.includes(data.crew[i].name)) {
            editingArr.push(data.crew[i].name)
          }
        } else if (data.crew[i].known_for_department === 'Crew') {
          if (!miscArr.includes(data.crew[i].name)) {
            miscArr.push(data.crew[i].name)
          }
        }
      };

      setWriting(writingArr);
      setProduction(productionArr);
      setMakeup(makeupArr);
      setCamera(cameraArr);
      setArt(artArr);
      setFx(fxArr);
      setSound(soundArr);
      setLighting(lightingArr);
      setEditing(editingArr);
      setDirecting(directingArr);
      setMisc(miscArr);
      setDirector(directors.join(' '));

    })
  }, [info]);

  return (
    <div className='info-container'>
      <Nav query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='film-backdrop'
        style={{ backgroundImage: `url(${API_IMG + info.backdrop})` }}>

      </div>
      <div className="details-container">
        <div className="details-left">
          <img src={API_IMG + info.poster} alt={`${film} poster`} className='film-poster' />
        </div>
        <div className="film-title-container">
            <div className='film-title'>{info.title}</div>
            <div className="film-release">{info.release}</div>
            <div className="directed-by">Directed by 
              <div className='director'>{director}</div>
            </div>
          </div>
        <div className="details-mid">
          <div className="tagline-movie">{tagline}</div>
          <div className='overview'>{info.overview}</div>
          <div className="people-container">
            <div className="people-options">
              <div id='cast' onClick={e => handleClick(e)}>Cast</div>
              <div id="crew" onClick={e => handleClick(e)}>Crew</div>
              <div id="details" onClick={e => handleClick(e)}>Details</div>
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
                )
              })}
            </div>
            : null
          }
          { (shown === 'crew') ?
            <div className="crew-list">
              { writing.length > 0 ? 
                <div className="crew">Writing <span className="empty"></span></div> : null }
              { writing.length > 0 ? 
                <div className="members">
                  {writing.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { production.length > 0 ?
                <div className="crew">Production <span className='empty'></span></div> : null }
              { production.length > 0 ? 
                <div className="members">
                  {production.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { makeup.length > 0 ? 
                <div className="crew">Makeup <span className='empty'></span></div> : null }
              { makeup.length > 0 ?
                <div className="members">
                  {makeup.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { camera.length > 0 ?
                <div className="crew">Camera <span className='empty'></span></div> : null }
              { camera.length > 0 ?
                <div className="members">
                  {camera.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { art.length > 0 ?
                <div className="crew">Art <span className='empty'></span></div> : null }
              { art.length > 0 ?
                <div className="members">
                  {art.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { fx.length > 0 ?
                <div className="crew">Visual Effects <span className='empty'></span></div> : null }
              { fx.length > 0 ? 
                <div className="members">
                {fx.map((member) => {
                  return (
                    <div className="member" key={member}>
                      {member}
                    </div>
                  )
                })}
              </div> : null }
              { sound.length > 0 ?
                <div className="crew">Sound <span className='empty'></span></div> : null }
              { sound.length > 0 ?
                <div className="members">
                  {sound.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { lighting.length > 0 ?
                <div className="crew">Lighting <span className='empty'></span></div> : null }
              { lighting.length > 0 ? 
                <div className="members">
                  {lighting.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { editing.length > 0 ? 
                <div className="crew">Editing <span className='empty'></span></div> : null }
              { editing.length > 0 ? 
                <div className="members">
                  {editing.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { directing.length > 0 ? 
                <div className="members">Directing <span className='empty'></span></div> : null }
              { directing.length > 0 ? 
                <div className="members">
                  {directing.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
              { misc.length > 0 ?
                <div className="members">Misc. Crew <span className='empty'></span></div> : null }
              { misc.length > 0 ? 
                <div className="members">
                  {misc.map((member) => {
                    return (
                      <div className="member" key={member}>
                        {member}
                      </div>
                    )
                  })}
                </div> : null }
            </div>
            : null
          }
          { (shown === 'details') ? 
            <div className="details-list">
              { studios.length > 0 ? 
                <div className="detail-type">Studios <span className='empty'></span></div> : null }
              { studios.length > 0 ? 
                <div className="details">
                  {studios.map((detail) => {
                    return (
                      <div className="detail" key={detail}>
                        {detail}
                      </div>
                    )
                  })}
                </div> : null }
              { country.length > 0 ? 
                <div className="detail-type">Country <span className='empty'></span></div> : null }
              { country.length > 0 ?
                <div className="details">
                  {country.map((detail) => {
                    return (
                      <div className="detail" key={detail}>
                        {detail}
                      </div>
                    )
                  })}
                </div> : null }  
              { spoken.length > 0 ? 
                <div className="detail-type">Spoken Language(s) <span className='empty'></span></div> : null }
              { spoken.length > 0 ?
                <div className="details">
                  {spoken.map((detail) => {
                    return (
                      <div className="detail" key={detail}>
                        {detail}
                      </div>
                    )
                  })}
                </div> : null }  
              { altTitle !== film ? 
                <div className="detail-type">Original Title <span className='empty'></span></div> : null }
              { altTitle !== film ?
                <div className="details">
                  <div>{altTitle}</div>
                </div> : null }  
              { runtime ? 
                <div className="detail-type">Runtime <span className='empty'></span></div> : null }
              { runtime ?
                <div className="details">
                  <div>{runtime} mins</div>
                </div> : null }  
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