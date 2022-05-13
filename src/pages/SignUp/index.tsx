import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Card } from '@material-ui/core';

import { signUpSchema } from '../../utils/validationSchema';
import CustomForm from '../../components/CustomForm';
import CustomButton from '../../components/CustomButton';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { registerUser } from '../../store/sideEffects/user';
import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';

const initialValues = {
  login: '',
  email: '',
  password: '',
  id: '',
};

export type authFormFields = 'login' | 'email' | 'password';

const signUpFormInfo = [
  {
    id: 'outlined-login',
    name: 'login' as authFormFields,
    placeholder: 'Login',
  },
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

export interface IUserFields {
  login?: string;
  email: string;
  password?: string;
  id: string;
}

function SignUp(): JSX.Element {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: IUserFields) => {
    dispatch(registerUser(values, () => navigate('/dashboard')));
  };

  const formik = useFormik<IUserFields>({
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
          <CustomForm<IUserFields>
            formClassName="signUpWrap__innerSection__form"
            formInfo={signUpFormInfo}
            values={formik.values}
            handleBlur={formik.handleBlur}
            handleSubmit={formik.handleSubmit}
            handleChange={formik.handleChange}
            touched={formik.touched}
            errors={formik.errors}
          >
            <CustomButton
              className="signUpWrap__innerSection__form__button"
              isDisabled={false}
              text="Continue"
              type="submit"
            />
          </CustomForm>
          <Link className="link" to="/login">Already have an account? Login</Link>
        </Card>
      </section>
    </div>
  );
}

export default SignUp;
