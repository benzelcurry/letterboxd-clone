// TO-DO LIST:
// 1. ADD SEARCH FEATURE
// 2. IMPLEMENT DYNAMIC ROUTING
// 3. IMPLEMENT ADDITIONAL FEATURES AS NEEDED TO REPLICATE LETTERBOXD UI

import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import MovieContainer from './MovieContainer';
import Apple from '../images/apple.svg';
import Android from '../images/android.svg';
import Calendar from '../images/calendar.svg';
import Eye from '../images/eye.svg';
import Grid from '../images/grid.svg';
import Heart from '../images/heart.svg';
import Review from '../images/review.svg';
import Star from '../images/star.svg';
import '../stylesheets/App.css';

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY
const API_IMG = 'https://image.tmdb.org/t/p/original/'

// REMEMBER TO SOURCE THAT TMDB WAS USED FOR API
// CURRENT PRIORITY: DYNAMICALLY CREATE PAGES WITH REACT-ROUTER THEN IMPLEMENT SEARCH FEATURE
const App = ({ film, setFilm }) => {
  const [movies, setMovies] = useState([])
  const [backdrop, setBackdrop] = useState('')
  const [query, setQuery] = useState('')
  const [popSix, setPopSix] = useState([])
  
  useEffect(() => {
    fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.results);
      setBackdrop(data.results[0].backdrop_path)
      setPopSix(data.results.slice(0, 6))
      console.log(data.results);
    })
  }, []);

  return (
    <div className='app-container'>
      <Nav setMovies={setMovies} query={query} setQuery={setQuery} />
      <div className="home-container">
        <div className="backdrop-container">
          <img src={API_IMG + backdrop} alt='Movie backdrop' className='backdrop'/>
        </div>
        <div className='motto'>
          <p>Track films you've watched.</p>
          <p>Save those you want to see.</p>
          <p>Tell your friends what's good.</p>
          <button className='home-sign-up'>GET STARTED − IT'S FREE!</button>
          <p className='tagline'>The social network for film lovers. Also available on
              <img src={Apple} alt='Apple' className='apple' />
              <img src={Android} alt='Android' className='android' />
          </p>
        </div>
      </div>
      <div className='movies-container'>
        <div className="popular-container">
          <div className="popular-title">POPULAR ON LETTERBOXD</div>
          <div className="popular-thumbnails">
            {popSix.map((movie)=>
                <MovieContainer key={movie.id}
                  filmID={movie.id}
                  title={movie.title}
                  poster={movie.poster_path}
                  average={movie.vote_average}
                  setFilm={setFilm}
                  height={231}
                  width={156}
                />
              )}
          </div>
        </div>
      </div>
      <div className="features-container">
        <div className="features-title">LETTERBOXD LETS YOU...</div>
        <div className="site-features">
          <div className="feature f1">
            <img src={Eye} alt='Review' className='feature-icon'/>
            <p>Keep track of every film you've ever watched (or just start from the day
               you join.</p>
          </div>
          <div className="feature f2">
            <img src={Star} alt='Star' className='feature-icon' />
            <p>Rate each film on a five star scale (with halves) to record and share
               your reaction.</p>
          </div>
          <div className="feature f3">
            <img src={Heart} alt='Heart' className="feature-icon" />
            <p>Show some love for your favorite films, lists and reviews with a "like"</p>
          </div>
          <div className="feature f1">
            <img src={Calendar} alt='Calendar' className="feature-icon" />
            <p>Keep a diary of your film watching (and upgrade to <span class='pro'>Pro</span> for
               comprehensive stats)</p>
          </div>
          <div className="feature f2">
            <img src={Review} alt='Review' className="feature-icon" />
            <p>Write and share reviews, and follow friends and other members to read theirs</p>
          </div>
          <div className="feature f3">
            <img src={Grid} alt='Grid' className="feature-icon" />
            <p>Compile and share lists of films on any topic and keep a watchlist of films
               to see</p>
          </div>
        </div>
      </div>
      <div className="ad-space">YOUR AD GOES HERE</div>
    </div>
  );
};

export default App;