import './App.css';
import Chatroom from './components/Chat/Chatroom';
// import SignIn from './components/Welcome/SignIn';
import Header from './components/Chat/Header';

// environment variables
// require('dotenv').config();
// require('dotenv-webpack').config();

// firebase
// import firebase from 'firebase/compat/app'
// import 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// hooks
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { SignInMethod } from 'firebase/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore'

// identify project
// firebase.initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID
// })

// references to auth and firebase sdks
// const auth = firebase.auth();
// const firestore = firebase.firestore();

function App() {

// signed, user is an object
// signed out, user is null
  // const auth = getAuth(firebase);
  // const [user] = useAuthState(auth);

  return (
    <div id="App">
      <header className="App-header">
        {/* {user ? <Header/> : null } */}
        <Header />
      </header>

      <section>
        {/* {user ? <Chatroom/> : <SignIn />} */}
        < Chatroom />
      </section>
    </div>
  );
}

export default App;

