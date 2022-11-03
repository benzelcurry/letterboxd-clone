// Displays members of the website (uses dummy info to protect info of anyone who signs in w/ Google to test website)

import React from 'react';

import Nav from './Nav';

const Members = ({ query, setQuery, searchQuery, setSearchQuery }) => {
  return (
    <div>
      <Nav query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      Members content will go here; create some fake members.
    </div>
  );
};

export default Members;