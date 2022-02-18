import React from 'react';
import { NavLink } from 'react-router-dom'

import './style.scss';
import errorImg from '../../assets/images/404.png'

const NotFound: React.FC = (): JSX.Element => {
    return (
        <div className='notFoundWrapper'>
            <img src={errorImg} alt="404" className='notFoundWrapper__img' />
            <NavLink to='/' className='notFoundWrapper__button'>
                <button className='notFoundWrapper__button'>Back to Main Page</button>
            </NavLink>
        </div>
    )
}

export default NotFound;