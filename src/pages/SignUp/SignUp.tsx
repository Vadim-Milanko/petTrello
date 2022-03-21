import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import { useFormik } from 'formik';
import { createBrowserHistory } from 'history';

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

export interface IUser {
  login: string;
  email: string;
  password: string;
}

export interface IServerResponse {
  hasError: boolean;
  message: string;
}

interface IProps {
  setIsLogin: (status: boolean) => void;
}

function SignUp(props: IProps): JSX.Element {
  const { setIsLogin } = props;

  const history = createBrowserHistory();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [registerResponse, setRegisterResponse] = useState<IServerResponse | null>(null);

  const onSubmit = async (values: IUser) => {
    const userResponse = await api.registerUser(values);
    setRegisterResponse(userResponse);
    setIsVisible(true);

    if (!userResponse.hasError) {
      setTimeout(() => {
        setIsLogin(true);
        history.push('/dashboard');
      }, 2500);
    }
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
              buttonClassName="signUpWrap__innerSection__form__button"
              isDisabled={false}
              text="Continue"
              type="submit"
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
