import React from 'react';

const GoogleLogo = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/google-logo.svg'} alt="google logo" />
    );
};

export default GoogleLogo;