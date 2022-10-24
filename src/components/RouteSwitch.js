import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Lists from './Lists';
import Members from './Members';

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/members' element={<Members />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;