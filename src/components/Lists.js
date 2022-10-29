import React from 'react';

import Nav from './Nav';
import '../stylesheets/Lists.css';
import Babadook from '../images/list-mocks/babadook.jpg';
import Lebowski from '../images/list-mocks/lebowski.jpg';
import Morbius from '../images/list-mocks/morbius.jpg';
import Spiderman from '../images/list-mocks/spiderman3.jpg';
import Room from '../images/list-mocks/the-room.jpg';

const Lists = () => {
  return (
    <div className='lists-container'>
      <Nav />
      <div className="lists-header">
        Collect, curate, and share. Lists are the perfect way to group films.
        <div className="lists-start">Start your own list</div>
      </div>
      <div className="popular-lists">
        <div className="popular-list-title">POPULAR THIS WEEK</div>
        <div className="lists-display">
          <div className="list">
            <div className="list-posters">
              <img src={Babadook} alt='Babadook' className='first'/>
              <img src={Lebowski} alt='The Big Lebowski' className='list-poster'/>
              <img src={Morbius} alt='Morbius' className='list-poster'/>
              <img src={Spiderman} alt='Spiderman 3' className='list-poster'/>
              <img src={Room} alt='The Room' className='list-poster'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;