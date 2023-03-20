import React from 'react';
import '../Styles/SuperchatLogo.css';

const SuperchatLogo = () => {
    return (
        <img id="logo" src={process.env.PUBLIC_URL + '/superchat-logo.svg'} alt="superchat logo"/>
    );
};

export default SuperchatLogo;