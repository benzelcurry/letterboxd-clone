import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../images/logo.png';
import Search from '../images/search.svg';
import '../stylesheets/Nav.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const API_SEARCH = process.env.REACT_APP_API_SEARCH

const Nav = ({ setMovies, query, setQuery }) => {
  // !!! POTENTIAL LOGIC FOR SEARCH FUNCTION BELOW !!!
  // const searchMovies = async(e) => {
  //   e.preventDefault();
  //   console.log('Searching');
    
  //   try {
  //     const url = API_SEARCH + '=' + query
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     setMovies(data.results);
  //   }
  //   catch(e) {
  //     console.log(e);
  //   }
  // }

  // const changeHandler = (e) => {
  //   setQuery(e.target.value);
  // }

  return (
    <div className='nav-container'>
      <div className="nav-container2">
        <img src={Logo} alt='Letterboxd logo' className='logo' />
        <div className='separate'>
          <div className='sign-in'>Sign In</div>
          <div className="create-account">Create Account</div>
          <div className="films">Films</div>
          <div className="lists">Lists</div>
          <div className="members">Members</div>
          <div className="journal">Journal</div>
          <form>
            <i className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
            <input type='text' className='search'></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;