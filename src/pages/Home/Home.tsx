import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';

const Home: React.FC = (): JSX.Element => {
    return (
        <div className='homeWrap'>
            <header className='homeWrap__header'>
                <nav className='homeWrap__header__navigation'>
                    <Link to="/home"><img src={logo} alt='logo' /></Link>
                    <div className='homeWrap__header__navigation__rightNav'>
                        <Link className='homeWrap__header__navigation__link' to="/login">LogIn</Link>
                        <Link className='homeWrap__header__navigation__link btn-signup' to="/signup">SignUp</Link>
                    </div>
                </nav>
            </header>
            <section className='homeWrap__info'>
                <h1 className='homeWrap__info__title'>Trello helps teams get things done efficiently.</h1>
                <p className='homeWrap__info__description'>Team up, manage projects, and take productivity to the next level in your own unique way with Trello.</p>
            </section>
        </div>
    )
}

export default Home;