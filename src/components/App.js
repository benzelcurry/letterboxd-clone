import React from 'react';
import { initializeApp} from 'firebase/app';

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

const App = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <div>App content will go here.</div>
  );
};

export default App;