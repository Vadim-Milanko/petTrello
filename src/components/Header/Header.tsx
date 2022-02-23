import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';

const Header: React.FC = (): JSX.Element => {
    return (
        <header className='header'>
            <nav className='header__navigation'>
                <Link to="/home"><img src={logo} alt='logo' /></Link>
                <div className='header__navigation__rightNav'>
                    <Link className='header__navigation__link' to="/login">LogIn</Link>
                    <Link className='header__navigation__link btn-signup' to="/signup">SignUp</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;