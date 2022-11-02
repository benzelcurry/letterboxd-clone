import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import Logo from '../images/logo.png';
import Dropdown from './Dropdown';
import SignIn from './SignIn';
import '../stylesheets/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const API_SEARCH = process.env.REACT_APP_API_SEARCH

// MAKE IT SO TITLES HIGHLIGHT IN WHITE USING STATE WHEN ON THEIR PAGES
const Nav = ({ setQuery, searchQuery, setSearchQuery }) => {
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
  const [hover, setHover] = useState(false);
  const {user, logOut} = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }

    setSignIn(false);
  }

  const navigate = useNavigate();

  // Send the search query through this function perhaps?
  const handleSearch = () => {
      setQuery(searchQuery)
      navigate('/search')
  }

  const handleQuery = (e) => {
    console.log('here');
    setSearchQuery(e.target.value);
  }

  const handleClick = () => {
    setSignIn(true);
  }

  const hoverUser = () => {
    setHover(true);
  }

  const exitUser = () => {
    setHover(false);
  }

  return (
    <div className='nav-container'>
      <div className="nav-container2">
        <Link to={'/'}>
          <img src={Logo} alt='Letterboxd logo' className='logo' />
        </Link>
        { !user?.displayName && signIn ?
          <SignIn setSignIn={setSignIn} setHover={setHover} />
          : 
          <div className='separate'>
            { user?.displayName && !hover ? 
              <div className="account-nav" onMouseLeave={exitUser}>
                <Link to={'/Account'} className='account' onMouseEnter={hoverUser}>
                  <img src={user.photoURL} alt='Profile picture' className='profile-pic' />
                  <div className='profile-name'>
                    {user.displayName.toUpperCase()}
                  </div>
                </Link>
              </div>
              : null }
            { user?.displayName && hover ? 
              <div className="account-nav" onMouseLeave={exitUser} style={{ backgroundColor: '#8899aa' }}>
                <Link to={'/Account'} className='account' onMouseEnter={hoverUser}>
                  <img src={user.photoURL} alt='Profile picture' className='profile-pic' />
                  <div className='profile-name' style={{ color: '#fff' }}>
                    {user.displayName.toUpperCase()}
                  </div>
                </Link>
                { hover ? 
                  <Dropdown onMouseEnter={hoverUser} handleSignOut={handleSignOut} />
                  : null
                }
              </div> 
              : null 
            }
            { !user?.displayName ? <div className='sign-in nav-icon' onClick={handleClick}>SIGN IN</div>
             : null
            }
            {/* <div className="create-account nav-icon">CREATE ACCOUNT</div> */}
            <Link to={'/Trending'} className="films nav-icon">TRENDING</Link>
            <Link to={'/Lists'} className='lists nav-icon'>LISTS</Link>
            <Link to={'/Members'} className='members-page nav-icon'>MEMBERS</Link>
            <form onSubmit={handleSearch}>
              <i className='search-icon' onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
              <input type='text' className='search' onChange={e => handleQuery(e)}></input>
            </form>
          </div>
        }
      </div>
    </div>
  );
};

export default Nav;