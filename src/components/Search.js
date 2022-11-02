import React, { useState } from 'react';

import Nav from './Nav';
import '../stylesheets/Search.css';

const Search = ({ query, setQuery, searchQuery, setSearchQuery }) => {
  return (
    <div className="search-page">
      <Nav query={query} setQuery={setQuery} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      Your search query is: {query}
    </div>
  );
};

export default Search;