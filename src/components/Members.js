// Displays members of the website (uses dummy info to protect info of anyone who signs in w/ Google to test website)

import React from 'react';

import Nav from './Nav';
import Avatar1 from '../images/list-avatars/avatar1.svg';
import Avatar2 from '../images/list-avatars/avatar2.svg';
import Avatar3 from '../images/list-avatars/avatar3.svg';
import '../stylesheets/Members.css';

const Members = ({ query, setQuery, searchQuery, setSearchQuery }) => {
  return (
    <div className='members-container'>
      <Nav query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="members-header">
        Film lovers, critics, and friends — find popular members.
      </div>
      <div className="pop-mems-title">POPULAR THIS WEEK</div>
      <div className="popular-members">
        <div className="pop-mem">
          <img src={Avatar1} alt='User avatar' className='pop-avatar'/>
          <div className="pop-mem-name">Paolo</div>
          <div className="pop-films">
            <div className="pop-films-seen">3.1K films</div>
            <div className="pop-films-reviewed">1.1K reviews</div>
          </div>
        </div>
        <div className="pop-mem">
          <img src={Avatar2} alt='User avatar' className='pop-avatar' id='two'/>
          <div className="pop-mem-name">Sue</div>
          <div className="pop-films">
            <div className="pop-films-seen">4.3K films</div>
            <div className="pop-films-reviewed">3.9K reviews</div>
          </div>
        </div>
        <div className="pop-mem">
          <img src={Avatar3} alt='User avatar' className='pop-avatar' id='three'/>
          <div className="pop-mem-name">Jaden</div>
          <div className="pop-films">
            <div className="pop-films-seen">2.7K films</div>
            <div className="pop-films-reviewed">0.9K reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;