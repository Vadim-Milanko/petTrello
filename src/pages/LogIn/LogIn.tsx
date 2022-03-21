import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import api from '../../api/Api';
import CustomForm from '../../components/CustomForm';
import CustomButton from '../../components/CustomButton';
import { IServerResponse } from '../SignUp/SignUp';
import CustomToast from '../../components/CustomToast';
import { logInSchema } from '../../utils/validationSchema';
import logo from '../../assets/images/Trello_logo.svg';

import '../SignUp/style.scss';

const initialValues = {
  email: '',
  password: '',
};

export type authFormFields = 'email' | 'password';

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

interface IProps {
  setIsLogin: (status: boolean) => void;
}

function LogIn(props: IProps): JSX.Element {
  const { setIsLogin } = props;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loginResponse, setLoginResponse] = useState<IServerResponse | null>(null);

  const history = createBrowserHistory();

  const onSubmit = async (userData: ILoginUserData) => {
    const loginUserResponse = await api.loginUser(userData);
    setLoginResponse(loginResponse);
    setIsVisible(true);

    if (!loginUserResponse.hasError) {
      setTimeout(() => {
        setIsLogin(true);
        history.push('/dashboard');
      }, 2500);
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
          <CustomForm
            formClassName="signUpWrap__innerSection__form"
            formInfo={logInFormInfo}
            values={formik.values}
            handleBlur={formik.handleBlur}
            handleSubmit={formik.handleSubmit}
            handleChange={formik.handleChange}
            touched={formik.touched}
            errors={formik.errors}
          >
            <CustomButton
              buttonClassName="signUpWrap__innerSection__form__button"
              isDisabled={false}
              text="Login"
              type="submit"
            />
          </CustomForm>
          <Link className="link" to="/signup">Register an account</Link>
        </Card>
      </section>
      {
        isVisible
          ? (
            <CustomToast
              message={loginResponse?.message}
              setToastVisible={setIsVisible}
              response={loginResponse}
            />
          )
          : null
      }
    </div>
  );
}

export default LogIn;
