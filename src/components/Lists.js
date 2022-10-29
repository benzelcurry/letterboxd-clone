import React from 'react';

import Nav from './Nav';
import '../stylesheets/Lists.css'

const Lists = () => {
  return (
    <div className='lists-container'>
      <Nav />
      <div className="lists-header">
        Collect, curate, and share. Lists are the perfect way to group films.
        <div className="lists-start">Start your own list</div>
      </div>
    </div>
  );
};

export default Lists;