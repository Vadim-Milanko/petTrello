import React from 'react';
import { useFormik } from 'formik';
import { Card } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../api/Api';
import CustomForm from '../../components/CustomForm';
import CustomButton from '../../components/CustomButton';
import { logInSchema } from '../../utils/validationSchema';
import logo from '../../assets/images/Trello_logo.svg';
import { setUserToLS } from '../../utils/localStorage';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';

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

function LogIn(): JSX.Element {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const onSubmit = async (userData: ILoginUserData) => {
    const loginUserResponse = await api.loginUser(userData);
    const {
      message,
      hasError,
      currentUser,
    } = loginUserResponse;
    const severity = hasError ? 'warning' : 'success';

    if (!hasError) {
      dispatch({
        ui: {
          toast: {
            isActive: true,
            message,
            severity,
          },
          loader: {
            isActive: true,
          },
        },
        user: currentUser,
      });
      setUserToLS('user', currentUser);
      navigate('/dashboard');
    } else {
      dispatch({
        ui: {
          toast: {
            isActive: true,
            message: loginUserResponse.message,
            severity,
          },
          loader: {
            isActive: false,
          },
        },
      });
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
    </div>
  );
}

export default LogIn;
