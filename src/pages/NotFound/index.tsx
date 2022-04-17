import React from 'react';
import { NavLink } from 'react-router-dom';

import errorImg from '../../assets/images/404.png';

import './style.scss';

function NotFound(): JSX.Element {
  return (
    <div className="notFoundWrapper">
      <img src={errorImg} alt="404" className="notFoundWrapper__img" />
      <NavLink to="/" className="notFoundWrapper__button">
        <button type="submit" className="notFoundWrapper__button">Back to Dashboard</button>
      </NavLink>
    </div>
  );
}

export default NotFound;
