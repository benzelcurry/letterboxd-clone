import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Lists from './Lists';
import Members from './Members';
import MoviePage from './MoviePage';

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/members' element={<Members />} />
        <Route path='/films/:movieName' element={<MoviePage />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;