// Simple account page that shows user info

import React from 'react';
import { UserAuth } from '../context/AuthContext';

import Nav from './Nav';
import '../stylesheets/Account.css';

const Account = ({ query, setQuery, searchQuery, setSearchQuery }) => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='account-container'>
      <Nav query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="account-panel">
        <img src={user.photoURL} alt='Profile picture' className='account-pic' />
        <div className='account-name'>{user?.displayName}</div>
        <button className='account-logout' onClick={handleSignOut}>Sign Out</button>
      </div>
      <div className="account-info">
        <div className="account-welcome">Welcome to your profile page!</div>
        <div className="account-about">
          <p>Here is where you can access info about your account.</p>
          <p>There's much to do on this site, though, so get out and access it!</p>
        </div>
      </div>
    </div>
  );
};

export default Account;