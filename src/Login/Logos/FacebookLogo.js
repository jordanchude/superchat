import React from 'react';

const FacebookLogo = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/facebook-logo.svg'} alt="facebook logo" />
    );
};

export default FacebookLogo;