import React from 'react';
import { UserAuth } from '../context/AuthContext';

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
      <div>Welcome, {user?.displayName}</div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Account;