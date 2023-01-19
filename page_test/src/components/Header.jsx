import React from 'react';
import '../styles/header.scss';
import Logo from '../assets/Logo.svg';




const Header = () => {
    return (
            <div className="header">
                <div className="header_wrapper">
                    <img className="header_logo" src={Logo} alt="Logo" />
                    <div className="header_buttons">
                        <button className="header_button">Users</button>
                        <button className="header_button">Sign up</button>
                    </div>
                </div>
            </div> 
    );
};

export default Header;