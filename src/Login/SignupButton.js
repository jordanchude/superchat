import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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

function SignupButton({email, password, onUserChange}) {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    
    const signIn = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            onUserChange(userCredential.user)
        } catch (err) {
            setError(err.message)
        }
    }

    const signOut = async (e) => {
        e.preventDefault();

        try {
            await auth.signOut()
            setUser(null);
            onUserChange(null);
        } catch(err) {
            setError(err.message);
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
                <button type="submit" onClick={signIn}>Sign In</button>
            </div>
        )}
        </div>
    );
}

export default SignupButton;