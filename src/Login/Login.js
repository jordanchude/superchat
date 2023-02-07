import React, { useState } from 'react';
import SignupButton from './SignupButton';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleUserChange = (user) => {
        setUser(user);
    }

    return (
        <div className="login">
            {!user && (
                <form>
                    <input type="email" placeholder="email" onChange={handleEmailChange}/>
                    <input type="password" placeholder="password" onChange={handlePasswordChange} onUserChange={handleUserChange}/>
                </form>
            )}

            <SignupButton email={email} password={password} onUserChange={handleUserChange}/>
        </div>
    );
}

export default Login;