import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Card, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { IUser } from '../SignUp/SignUp';
import { logInSchema } from '../../utils/validationSchema';
import logo from '../../assets/images/Trello_logo.svg';

import '../SignUp/style.scss';

const initialValues = {
  email: '',
  password: '',
};

type authFormFields = 'email' | 'password';

const logInFormInfo = [
  {
    id: 'outlined-email',
    name: 'email' as authFormFields,
    placeholder: 'Email',
  },
  {
    id: 'outlined-password',
    name: 'password' as authFormFields,
    placeholder: 'Password',
  },
];

export interface ILoginUserData {
  email: string;
  password: string;
}

export interface IUsers {
  users: IUser[];
}

function LogIn(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  console.log(isLogin, setIsLogin);

  const onSubmit = async (values: ILoginUserData) => {
    try {
      console.log(values);
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik<ILoginUserData>({
    initialValues,
    onSubmit,
    validationSchema: logInSchema,
  });

  return (
    <div className="signUpWrap">
      <img className="signUpWrap__mainLogo" src={logo} alt="logo" />
      <section className="signUpWrap__innerSection">
        <Card className="signUpWrap__innerSection__card">
          <p>Login Trello</p>
          <form className="signUpWrap__innerSection__form" onSubmit={formik.handleSubmit}>
            {
              logInFormInfo.map((input) => {
                const {
                  id,
                  name,
                  placeholder,
                } = input;

                return (
                  <div key={id} className="form-control">
                    <TextField
                      id={id}
                      name={name}
                      placeholder={placeholder}
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values[name]}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched[name] && formik.errors[name]
                      ? (
                        <div className="form-control__error">
                          {formik.errors[name]}
                        </div>
                      ) : null}
                  </div>
                );
              })
            }
            <button
              className="signUpWrap__innerSection__form__button"
              type="submit"
              disabled={false}
            >
              Login
            </button>
          </form>
          <Link className="link" to="/signup">Register an account</Link>
        </Card>
      </section>
    </div>
  );
}

export default LogIn;
