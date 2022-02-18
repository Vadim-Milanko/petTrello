import React from 'react';
import { Link } from "react-router-dom";
import { Card, TextField } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '400px',
            height: '100%',
        },
    }),
);

const SignUp: React.FC = (): JSX.Element => {
    const classes = useStyles()

    return (
        <div className='signUpWrap'>
            <img className='signUpWrap__mainLogo' src={logo} alt="logo"/>
            <section className='signUpWrap__innerSection'>
                <Card className={classes.root}>
                    <p>Register an account</p>
                    <form action="">
                        <TextField id="outlined-email" placeholder="Email" variant="outlined" />
                        <TextField id="outlined-login" placeholder="Login" variant="outlined" />
                        <TextField id="outlined-password" placeholder="Password" variant="outlined" />
                    </form>
                    <Link className='link' to="/login">Already have an account? Login</Link>
                </Card>
            </section>
        </div>
    )
}

export default SignUp;