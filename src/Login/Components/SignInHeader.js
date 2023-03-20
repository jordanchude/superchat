import React from 'react';
import SuperchatLogo from '../Logos/SuperchatLogo';
import '../Styles/SignInHeader.css';

const SignInHeader = () => {
    return (
        <div>
            <SuperchatLogo />
            <p> Don't have an account? Sign up here.</p>
        </div>
    );
};

export default SignInHeader;