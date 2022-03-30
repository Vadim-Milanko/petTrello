import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { initialStore } from '../../store/initialStore';
import { clearUserFromLS, getUserFromLS } from '../../utils/localStorage';
import logo from '../../assets/images/Trello_logo.svg';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';

import './style.scss';

function Header(): JSX.Element {
  const dispatch = useCustomDispatch();

  const navigate = useNavigate();

  const isHasUserInLS = getUserFromLS();

  const logOut = () => {
    clearUserFromLS();
    dispatch(initialStore);
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
