import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import '../stylesheets/MoviePage.css';

const API_SEARCH = process.env.REACT_APP_API_SEARCH;

const MoviePage = ({ film, setFilm }) => {
  const [search, setSearch] = useState(null);
  const [overview, setOverview] = useState(null);

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
      setOverview(data.results[0].overview);
    })
  }, [search]);

  return (
    <div className='info-container'>
      <Nav />
      This is the page for the movie {film}.
      <p>{overview}</p>
    </div>
  );
};

export default MoviePage;