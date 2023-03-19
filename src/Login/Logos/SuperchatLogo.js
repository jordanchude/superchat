import React from 'react';

const SuperchatLogo = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/superchat-logo.svg'} alt="superchat logo"/>
    );
};

export default SuperchatLogo;