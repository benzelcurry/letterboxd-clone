import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../images/logo.png';
import '../stylesheets/Nav.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const API_SEARCH = process.env.REACT_APP_API_SEARCH

// MAKE IT SO TITLES HIGHLIGHT IN WHITE USING STATE WHEN ON THEIR PAGES
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
        <Link to={'/'}>
          <img src={Logo} alt='Letterboxd logo' className='logo' />
        </Link>
        <div className='separate'>
          <div className='sign-in nav-icon'>SIGN IN</div>
          <div className="create-account nav-icon">CREATE ACCOUNT</div>
          <Link to={'/Trending'} className="films nav-icon">TRENDING</Link>
          <Link to={'/Lists'} className='lists nav-icon'>LISTS</Link>
          <Link to={'/Members'} className='members-page nav-icon'>MEMBERS</Link>
          <div className="journal nav-icon">JOURNAL</div>
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