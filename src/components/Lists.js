import React from 'react';

import Nav from './Nav';
import '../stylesheets/Lists.css';
import Babadook from '../images/list-mocks/babadook.jpg';
import Lebowski from '../images/list-mocks/lebowski.jpg';
import Morbius from '../images/list-mocks/morbius.jpg';
import Spiderman from '../images/list-mocks/spiderman3.jpg';
import Room from '../images/list-mocks/the-room.jpg';
import Avatar1 from '../images/list-avatars/avatar1.svg';
import Avatar2 from '../images/list-avatars/avatar2.svg';
import Avatar3 from '../images/list-avatars/avatar3.svg';
import Heart from '../images/heart.svg';
import Comment from '../images/comment.svg';

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
          {/* IF THIS WAS FOR A REAL WEBSITE, WOULD MAKE LISTS INTO REUSABLE COMPONENTS */}
          <div className="list">
            <div className="list-posters">
              <img src={Babadook} alt='Babadook' className='first'/>
              <img src={Lebowski} alt='The Big Lebowski' className='list-poster'/>
              <img src={Morbius} alt='Morbius' className='list-poster'/>
              <img src={Spiderman} alt='Spiderman 3' className='list-poster'/>
              <img src={Room} alt='The Room' className='list-poster'/>
            </div>
            <div className="list-name">Definitely A Real List</div>
            <div className="list-author">
              <img src={Avatar1} alt='User avatar' className='avatar a1'/>
              <div className="author">Jeff Lebowski</div>
              <div className="list-likes">
                <img src={Heart} alt='Likes' className='list-icons'/>
                27K
              </div>
              <div className="list-comments">
                <img src={Comment} alt='Comments' className='list-icons'/>
                1.8K
              </div>
            </div>
          </div>
          <div className="list">
            <div className="list-posters">
              <img src={Morbius} alt='Morbius' className='first'/>
              <img src={Babadook} alt='Babadook' className='list-poster'/>
              <img src={Lebowski} alt='The Big Lebowski' className='list-poster'/>
              <img src={Room} alt='The Room' className='list-poster'/>
              <img src={Spiderman} alt='Spiderman 3' className='list-poster'/>
            </div>
            <div className="list-name">Spiderman 3 Is The Best Spiderman!!</div>
            <div className="list-author">
              <img src={Avatar3} alt='User avatar' className='avatar a3'/>
              <div className="author">Donny Kerabatsos</div>
              <div className="list-likes">
                <img src={Heart} alt='Likes' className='list-icons'/>
                12
              </div>
              <div className="list-comments">
                <img src={Comment} alt='Comments' className='list-icons'/>
                39K
              </div>
            </div>
          </div>
          <div className="list">
            <div className="list-posters">
            <img src={Spiderman} alt='Spiderman 3' className='first'/>
              <img src={Babadook} alt='Babadook' className='list-poster'/>
              <img src={Morbius} alt='Morbius' className='list-poster'/>
              <img src={Room} alt='The Room' className='list-poster'/>
              <img src={Lebowski} alt='The Big Lebowski' className='list-poster'/>
            </div>
            <div className="list-name">Movies For Those With Taste</div>
            <div className="list-author">
              <img src={Avatar2} alt='User avatar' className='avatar a2'/>
              <div className="author">Maude L.</div>
              <div className="list-likes">
                <img src={Heart} alt='Likes' className='list-icons'/>
                101K
              </div>
              <div className="list-comments">
                <img src={Comment} alt='Comments' className='list-icons'/>
                4.1K
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;