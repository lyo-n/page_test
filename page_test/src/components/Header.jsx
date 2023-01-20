import React from 'react';
import { fetchLoginUsers } from '../http/usersAPI';
import '../styles/header.scss';
import Logo from '../assets/Logo.svg';




const Header = () => {

function logIn () {
    fetchLoginUsers().then(data => localStorage.setItem(`token`,`${data.token}`))
}

    return (
            <div className="header">
                <div className="header_wrapper">
                    <img className="header_logo" src={Logo} alt="Logo" />
                    <div className="header_buttons">
                        <button className="header_button">Users</button>
                        <button className="header_button" onClick={() => logIn()}>Sign up</button>
                    </div>
                </div>
            </div> 
    );
};

export default Header;