import React from 'react';
import { UserAuth } from '../context/AuthContext';

import Nav from './Nav';
import '../stylesheets/Account.css';

const Account = () => {
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
      <Nav />
      <div>Welcome, {user?.displayName}</div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Account;