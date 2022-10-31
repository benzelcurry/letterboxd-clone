import React from 'react';

import '../stylesheets/SignIn.css';

const SignIn = ({ setSignIn }) => {
  const handleClick = () => {
    setSignIn(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="sign-in-container">
      <div className='close' onClick={handleClick}>×</div>
      <form className='sign-in-form' onSubmit={e => handleSubmit(e)}>
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
      </form>
    </div>
  );
};

export default SignIn;