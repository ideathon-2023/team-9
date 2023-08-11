import React from 'react';
import logo from './logo.png';


const Logo = () => {
    return ( 
        <a href="#home" target="_blank" rel="noopener noreferrer">
        <img classname="logo" src={logo} alt="Example" />
        </a>
     );
};

export default Logo;

