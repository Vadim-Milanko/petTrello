import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Card, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FormikProps, useFormik} from "formik";
import * as Yup from "yup";

import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';
import api from "../../api/Api";

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
        button: {
            marginBottom: '17px',
        }
    }),
);

interface ICreateUserValues {
    login: string;
    email: string;
    password: string;
}

const SignUp: React.FC = (): JSX.Element => {
  const [users, setUsers] = useState<any>([]);

  const classes = useStyles()

  const initialValues = {
    login: '',
    email: '',
    password: '',
  }

  const onSubmit = async (values: IUser) => {
    try {
      const user = await registerUser(values)
      console.log('bla')
    } catch (err) {
      console.log(err);
    }
  }

  const validationSchema = Yup.object({
    login: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required'),
  })

  const formik: FormikProps<ICreateUserValues> = useFormik<ICreateUserValues>({
    initialValues,
    onSubmit,
    validationSchema,
  })

  const getUsers = async (): Promise<void> => {
    const users = await api.fetchUsers();
    setUsers(users);

    return users;
  }

  const chekOnRegistred = (currentUsers: IUser[], newUser: IUser): boolean => {
    const duplicateEmail = currentUsers.find(user => user.email === newUser.email);

    return typeof(duplicateEmail) !== 'undefined';
  }

  const registerUser = async (userPayload: ICreateUserValues) => {
    const usersFromDb = await getUsers();

    const isAlreadyRegistred = chekOnRegistred(usersFromDb, userPayload);

    const result = await api.registerUser(userPayload);
  }

  return (
    <div className='signUpWrap'>
      <img className='signUpWrap__mainLogo' src={logo} alt="logo"/>
      <section className='signUpWrap__innerSection'>
        <Card className={classes.root}>
          {/*{*/}
          {/*  true ? <Alert severity="success" closeText='close'>Success registration!</Alert> : null*/}
          {/*}*/}
          <p>Register an account</p>
          <form className='signUpWrap__innerSection__form' onSubmit={formik.handleSubmit}>
            <div className='form-control'>
              <TextField
                id="outlined-login"
                name='login'
                placeholder="Login"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.login}
                onBlur={formik.handleBlur}
              />
              { formik.touched.login && formik.errors.login ? <div className='error'>{formik.errors.login}</div> : null}
            </div>
            <div className='form-control'>
              <TextField
                id="outlined-email"
                name='email'
                placeholder="Email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              { formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null }
            </div>
            <div className='form-control'>
              <TextField
                id="outlined-password"
                name='password'
                placeholder="Password"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              { formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
            </div>
            <button className={classes.button} type='submit' disabled={false}>Continue</button>
          </form>
          <Link className='link' to="/login">Already have an account? Login</Link>
        </Card>
      </section>
    </div>
  )
}

export default SignUp;
