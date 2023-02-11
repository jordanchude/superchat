import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function SignIn() {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleUserChange = (user) => {
        setUser(user);
    }
    
    const signIn = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (err) {
            setError(err.message)
        }
    }


    const signInWithGoogle = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const userCredential = await signInWithPopup(auth, provider);
          setUser(userCredential.user);
        } catch (err) {
          setError(err.message);
        }
      };

    const signOut = async (e) => {
        e.preventDefault();

        try {
            await auth.signOut()
            setUser(null);
        } catch(err) {
            setError(err.message);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            signIn(e);
        }
    }

    return (
        <div>
        {user ? (
            <div>
                <button type="submit" onClick={signOut}>Sign Out</button>
            </div>
        ) : (
            <div>
                <form onKeyDown={handleKeyDown}>
                    <input type="email" placeholder="email" onChange={handleEmailChange}/>
                    <input type="password" placeholder="password" onChange={handlePasswordChange} onUserChange={handleUserChange}/>
                    <button type="submit" onClick={signIn}>Sign In</button>
                </form>

                <div onClick={signInWithGoogle}> 
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
                </div>
            </div>
        )}
        </div>
    );
}

export default SignIn;