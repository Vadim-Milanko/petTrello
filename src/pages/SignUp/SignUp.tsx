import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import { useFormik } from 'formik';

import api from '../../api/Api';
import { signUpSchema } from '../../utils/validationSchema';
import CustomToast from '../../components/CustomToast';
import CustomForm from '../../components/CustomForm';
import CustomButton from '../../components/CustomButton';
import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';

const initialValues = {
  login: '',
  email: '',
  password: '',
};

type authFormFields = 'login' | 'email' | 'password';

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

export interface IUser {
  login: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  hasError: boolean;
  message: string;
}

function SignUp(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [registerResponse, setRegisterResponse] = useState<IRegisterResponse | null>(null);

  const onSubmit = async (values: IUser) => {
    const user = await api.registerUser(values);
    setRegisterResponse(user);
    setIsVisible(true);
  };

  const formik = useFormik<IUser>({
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
          <CustomForm
            formInfo={signUpFormInfo}
            formik={formik}
          >
            <CustomButton
              className="signUpWrap__innerSection__form__button"
              isDisabled={false}
              text="Continue"
            />
          </CustomForm>
          <Link className="link" to="/login">Already have an account? Login</Link>
        </Card>
      </section>
      {
        isVisible
          ? (
            <CustomToast
              response={registerResponse}
              setToastVisible={setIsVisible}
              message={registerResponse?.message}
            />
          )
          : null
      }
    </div>
  );
}

export default SignUp;
