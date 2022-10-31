import React from 'react';

import '../stylesheets/SignIn.css';

const SignIn = ({ setSignIn }) => {
  const handleClick = () => {
    setSignIn(false);
  };

  return (
    <div className="sign-in-container">
      <div onClick={handleClick}>Exit</div>
      Sign in stuff will go here.
    </div>
  );
};

export default SignIn;