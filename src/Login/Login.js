import React, { useState } from 'react';
import SignupButton from './SignupButton';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login">
            <form>
                <input type="email" placeholder="email" onChange={handleEmailChange}/>
                <input type="password" placeholder="password" onChange={handlePasswordChange}/>
                <SignupButton email={email} password={password}/>
            </form>
        </div>
    );
}

export default Login;