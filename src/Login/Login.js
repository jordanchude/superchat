import React, { useState } from 'react';
import SignupButton from './SignupButton';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <SignupButton email={email} password={password}/>
            </form>
        </div>
    );
}

export default Login;