import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

function SignupButton({email, password}) {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    
    const signIn = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <button type="submit" onClick={signIn}>Sign In</button>
        </div>
    );
}

export default SignupButton;
