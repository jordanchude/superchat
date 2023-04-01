import React from 'react';
import '/Users/jordan/Documents/Code/projects/superchat/src/Login/Styles/SignIn/SignIn.css'

const GoogleLogo = () => {
    return (
        <img class="icon" src={process.env.PUBLIC_URL + '/google-logo.svg'} alt="google logo" />
    );
};

export default GoogleLogo;