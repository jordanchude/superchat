import React from 'react'
import './App.css';

// environment variables
require('dotenv').config();

// firebase
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

// hooks
import { useAuthState } from 'react-firebase-hooks'
import { useCollectionData } from 'react-firebase-hooks/firestore'

// identify project
firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
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
