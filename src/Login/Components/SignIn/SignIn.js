import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import GoogleLogo from '/Users/jordan/Documents/Code/projects/superchat/src/Login/Logos/GoogleLogo.js';
import FacebookLogo from '/Users/jordan/Documents/Code/projects/superchat/src/Login/Logos/FacebookLogo.js';
import PeopleDancing from '/Users/jordan/Documents/Code/projects/superchat/src/Login/Logos/PeopleDancing.js';
import SignInHeader from './SignInHeader';

// Styles
import '/Users/jordan/Documents/Code/projects/superchat/src/Login/Styles/SignIn/SignIn.css';

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

    const handleInputChange = (e) => {
        if (e.target.name === "email") {
          setEmail(e.target.value);
        } else if (e.target.name === "password") {
          setPassword(e.target.value);
        }
      };
      
    
    const signIn = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (err) {
            setError(err.message)
            console.log(error)
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
      
    
      const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;
            setUser(user);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // IdP data available using getAdditionalUserInfo(result)
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
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
        <div class="container">
          <div class="left-side">
            <div>
                <SignInHeader />
            </div>
            {user ? (
                <div>
                    <button type="submit" onClick={signOut}>Sign Out</button>
                </div>
            ) : (
                <div>
                    <div>
                      <h1>Sign In</h1>
                    </div>
                    <form onKeyDown={handleKeyDown}>
                        <input type="email" placeholder="email" onChange={handleEmailChange}/>
                        <input type="password" placeholder="password" onChange={handleInputChange}/>
                        <button type="submit" onClick={signIn}>Sign In</button>
                    </form>
                    <div>
                      <input type="checkbox" id="rememberMe" name="rememberMe"></input><label>Remember Me?</label>
                      <p>Forgot password?</p>
                    </div>
                    <div>
                      <button>Sign In</button>
                    </div>

                    <div onClick={signInWithGoogle}> 
                        <GoogleLogo />
                    </div>

                    <div onClick={signInWithFacebook}> 
                        <FacebookLogo />
                    </div>
                </div>
            )}
            </div>
            <div class="right-side">
              <div class="image">
                <PeopleDancing />
              </div>
            </div>
          </div>
    );
}

export default SignIn;