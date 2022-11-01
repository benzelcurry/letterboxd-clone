import React from 'react';

import '../stylesheets/Dropdown.css';

const Dropdown = ({ handleSignOut }) => {
  return (
    <div className='dropdown-container'>
      <div className="dd signout" onClick={handleSignOut}>Sign Out</div>
    </div>
  );
};

export default Dropdown;