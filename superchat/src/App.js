import React from 'react'
import './App.css';

// firebase
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

// hooks
import { useAuthState } from 'react-firebase-hooks'
import { useCollectionData } from 'react-firebase-hooks/firestore'

// identify project
firebase.initializeApp({
  // your config
})

// references to auth and firebase sdks
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
