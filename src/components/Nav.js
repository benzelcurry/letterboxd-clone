import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import Logo from '../images/logo.png';
import SignIn from './SignIn';
import '../stylesheets/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  const [signIn, setSignIn] = useState(false);
  const {user, logOut} = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }

    setSignIn(false);
  }

  const handleClick = () => {
    setSignIn(true);
  }

  return (
    <div className='nav-container'>
      <div className="nav-container2">
        <Link to={'/'}>
          <img src={Logo} alt='Letterboxd logo' className='logo' />
        </Link>
        { !user?.displayName && signIn ?
          <SignIn setSignIn={setSignIn} />
          : 
          <div className='separate'>
            { user?.displayName ? 
              <Link to={'/Account'} className='account'>
                <img src={user.photoURL} alt='Profile picture' className='profile-pic' />
                <div className='profile-name'>{user.displayName.toUpperCase()}</div>
              </Link> 
              : null }
            { user?.displayName ? <button onClick={handleSignOut}>Logout</button> : 
              <div className='sign-in nav-icon' onClick={handleClick}>SIGN IN</div>
            }
            <div className="create-account nav-icon">CREATE ACCOUNT</div>
            <Link to={'/Trending'} className="films nav-icon">TRENDING</Link>
            <Link to={'/Lists'} className='lists nav-icon'>LISTS</Link>
            <Link to={'/Members'} className='members-page nav-icon'>MEMBERS</Link>
            <form>
              <i className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
              <input type='text' className='search'></input>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default Nav;