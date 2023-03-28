import React from 'react';
import '/Users/jordan/Documents/Code/projects/superchat/src/Login/Styles/SignIn/SuperchatLogo.css';

const SuperchatLogo = () => {
    return (
        <img id="logo" src={process.env.PUBLIC_URL + '/superchat-logo.svg'} alt="superchat logo"/>
    );
};

export default SuperchatLogo;