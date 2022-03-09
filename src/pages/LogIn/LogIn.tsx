import React, { useState } from "react";
import { FormikProps, useFormik } from "formik";
import { Card, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

import { IUser } from "../SignUp/SignUp";
import { logInSchema } from "../../utils/validationSchema";
import logo from "../../assets/images/Trello_logo.svg";

import '../SignUp/style.scss';

const initialValues = {
  email: '',
  password: '',
};

const logInFormInfo = [
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

export interface ILoginUserData {
  email: string;
  password: string;
}

export interface IUsers {
  users: IUser[];
}

export type errorLabels = 'email' | 'password';

function LogIn(): JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const onSubmit = async (values: ILoginUserData) => {
    try {
      console.log(isLogin);
    } catch (err) {
      console.log(err);
    }
  }

  const formik: FormikProps<ILoginUserData> = useFormik<ILoginUserData>({
    initialValues,
    onSubmit,
    validationSchema: logInSchema,
  })

  return (
    <div className="signUpWrap">
      <img className="signUpWrap__mainLogo" src={logo} alt="logo" />
      <section className="signUpWrap__innerSection">
        <Card className="signUpWrap__innerSection__card">
          <p>Login Trello</p>
          <form className="signUpWrap__innerSection__form" onSubmit={formik.handleSubmit}>
            {
              logInFormInfo.map(input => {
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
                )
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
