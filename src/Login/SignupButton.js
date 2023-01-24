import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth;

function SignupButton({email, password}) {
    const [error, setError] = useState(null);
    
    const signIn = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
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