import React from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

import '../stylesheets/SignIn.css';

const SignIn = ({ setSignIn, setHover }) => {
  const { googleSignIn, user } = UserAuth();

  const handleClick = () => {
    setSignIn(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error);
    }

    setHover(false);
  }

  return (
    <div className="sign-in-container">
      <div className='close' onClick={handleClick}>×</div>
       {/* <form className='sign-in-form' onSubmit={e => handleSubmit(e)}>
        <div className="sign-in-info">
          <label htmlFor='username'>Username or Email</label>
          <input type='text' id='username' name='username'></input>
        </div>
        <div className="sign-in-info">
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password'></input>
        </div>
        <div className="sign-in-remember">
          <input type='checkbox' id='remember' name='remember'></input>
          <label htmlFor='remember' className='remember'>Remember me</label>
        </div>
        <button className='sign-in'>SIGN IN</button>
      </form> */}
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default SignIn;