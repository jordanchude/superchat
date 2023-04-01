import React from 'react';
import '/Users/jordan/Documents/Code/projects/superchat/src/Login/Styles/SignIn/SignIn.css'

const FacebookLogo = () => {
    return (
        <img class="icon" src={process.env.PUBLIC_URL + '/facebook-logo.svg'} alt="facebook logo" />
    );
};

export default FacebookLogo;