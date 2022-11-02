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
      <div>Welcome, {user?.displayName}</div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Account;