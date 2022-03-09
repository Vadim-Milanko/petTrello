import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, TextField } from '@material-ui/core';
import { FormikProps, useFormik } from 'formik';

import api from '../../api/Api';
import { signUpSchema } from '../../utils/validationSchema';
import CustomToast from "../../components/CustomToast/CustomToast";
import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';

const initialValues = {
  login: '',
  email: '',
  password: '',
};

const signUpFormInfo = [
  {
    id: 'outlined-login',
    name: 'login',
    placeholder: 'Login',
  },
  {
    id: 'outlined-email',
    name: 'email',
    placeholder: 'Email',
  },
  {
    id: 'outlined-password',
    name: 'password',
    placeholder: 'Password',
  },
];

export interface IUser {
  login: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  hasError: boolean;
  message: string;
}

type errorLabels = 'login' | 'email' | 'password';

function SignUp(): JSX.Element {
  const [active, setActive] = useState(false);
  const [registerResponse, setRegisterResponse] = useState<IRegisterResponse | null>(null);

  const onSubmit = async (values: IUser) => {
    try {
      const user = await api.registerUser(values);
      setRegisterResponse(user);
      setActive(true);
    } catch (err) {
      console.log(err);
    }
  };

  const formik: FormikProps<IUser> = useFormik<IUser>({
    initialValues,
    onSubmit,
    validationSchema: signUpSchema,
  });

  return (
    <div className="signUpWrap">
      <img className="signUpWrap__mainLogo" src={logo} alt="logo" />
      <section className="signUpWrap__innerSection">
        <Card className="signUpWrap__innerSection__card">
          <p>Register an account</p>
          <form className="signUpWrap__innerSection__form" onSubmit={formik.handleSubmit}>
            {signUpFormInfo.map(input => {
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
                    value={formik.values[name as errorLabels]}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched[name as errorLabels] && formik.errors[name as errorLabels]
                    ? (
                      <div className="form-control__error">
                        {formik.errors[name as errorLabels]}
                      </div>
                    ) : null}
                </div>
              );
            })}
            <button
              className="signUpWrap__innerSection__form__button"
              type="submit"
              disabled={false}
            >
              Continue
            </button>
          </form>
          <Link className="link" to="/login">Already have an account? Login</Link>
        </Card>
      </section>
      {
        active
          ? <CustomToast
            response={registerResponse}
            setToastVisible={setActive}
            />
          : null
      }
    </div>
  );
}

export default SignUp;
