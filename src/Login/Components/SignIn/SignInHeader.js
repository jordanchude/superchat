import React from 'react';
import SuperchatLogo from '/Users/jordan/Documents/Code/projects/superchat/src/Login/Logos/SuperchatLogo.js';
import '/Users/jordan/Documents/Code/projects/superchat/src/Login/Styles/SignIn/SignInHeader.css';

const SignInHeader = () => {
    return (
        <div>
            <SuperchatLogo />
            <p> Don't have an account? Sign up here.</p>
        </div>
    );
};

export default SignInHeader;