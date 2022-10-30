import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Lists from './Lists';
import Members from './Members';
import MoviePage from './MoviePage';
import Trending from './Trending';

const RouteSwitch = () => {
  const [film, setFilm] = useState(null);

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App film={film} setFilm={setFilm} />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/members' element={<Members />} />
        <Route path='/films/:movieName' element={<MoviePage film={film} setFilm={setFilm} />} />
        <Route path='/trending' element={<Trending />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;