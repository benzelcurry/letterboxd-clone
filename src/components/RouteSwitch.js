import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';

import App from './App';
import Lists from './Lists';
import Members from './Members';
import MoviePage from './MoviePage';
import Trending from './Trending';
import Account from './Account';
import Protected from './Protected';
import Search from './Search';

const RouteSwitch = () => {
  const [film, setFilm] = useState(null);
  const [query, setQuery] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <AuthContextProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App film={film} setFilm={setFilm} query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          <Route path='/lists' element={<Lists query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          <Route path='/members' element={<Members query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          <Route path='/films/:movieName' element={<MoviePage film={film} setFilm={setFilm} query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          <Route path='/trending' element={<Trending setFilm={setFilm} query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
          <Route path='/account' element={<Protected><Account query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} /></Protected>} />
          <Route path='/search' element={<Search query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        </Routes>
      </HashRouter>
    </AuthContextProvider>
  );
};

export default RouteSwitch;