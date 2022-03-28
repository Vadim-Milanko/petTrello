import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AppContext } from '../../context';
import { initialStore } from '../../index';
import { clearUserFromLS, getUserFromLS } from '../../utils/localStorage';
import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';

function Header(): JSX.Element {
  const { setStoreState } = useContext(AppContext);
  const navigate = useNavigate();

  const isHasUserInLS = getUserFromLS();

  const logOut = () => {
    clearUserFromLS();
    setStoreState(initialStore);
    navigate('/home');
  };

  return (
    <header className="header">
      <nav className="header__navigation">
        <Link to="/home"><img src={logo} alt="logo" /></Link>
        {
          isHasUserInLS
            ? (
              <div className="header__navigation__rightNav">
                <Link className="header__navigation__link" to="/" onClick={logOut}>LogOut</Link>
              </div>
            )
            : (
              <div className="header__navigation__rightNav">
                <Link className="header__navigation__link" to="/login">LogIn</Link>
                <Link className="header__navigation__link btn-signup" to="/signup">SignUp</Link>
              </div>
            )
        }
      </nav>
    </header>
  );
}

export default Header;
