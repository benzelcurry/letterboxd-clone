// TO-DO LIST:
// 1. ADD SEARCH FEATURE
// 2. IMPLEMENT DYNAMIC ROUTING
// 3. IMPLEMENT ADDITIONAL FEATURES AS NEEDED TO REPLICATE LETTERBOXD UI

import React, { useState, useEffect } from 'react';
import { initializeApp} from 'firebase/app';

import Nav from './Nav';
import MovieContainer from './MovieContainer';

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBUOkvGhEi0c5N9s6Y9s6WXDWSBu-eW54",
  authDomain: "letterboxd-clone-odin.firebaseapp.com",
  projectId: "letterboxd-clone-odin",
  storageBucket: "letterboxd-clone-odin.appspot.com",
  messagingSenderId: "505756328658",
  appId: "1:505756328658:web:2fb82a6c7cf50d1455030b"
};

// REMEMBER TO SOURCE THAT TMDB WAS USED FOR API
const App = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  
  // useEffect(() => {
  //   fetch(API_URL)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setMovies(data.results);
  //   })
  // }, []);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <div>
      <Nav setMovies={setMovies} query={query} setQuery={setQuery} />
      {movies.map((movie)=>
        <MovieContainer key={movie.id} 
          title={movie.title}
          poster={movie.poster_path}
          average={movie.vote_average}
          release={movie.release_date}
          overview={movie.overview}
        />
      )}
    </div>
  );
};

export default App;