import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Card } from '@material-ui/core';

import CustomForm from '../../components/CustomForm';
import CustomButton from '../../components/CustomButton';
import { logInSchema } from '../../utils/validationSchema';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { loginUser } from '../../store/sideEffects/user';
import logo from '../../assets/images/Trello_logo.svg';

import '../SignUp/style.scss';

const initialValues = {
  email: '',
  password: '',
  id: '',
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
  id: string;
}

function LogIn(): JSX.Element {
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const onSubmit = (userData: ILoginUserData) => {
    dispatch(loginUser(userData, () => navigate('/', { replace: true })));
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
          <CustomForm<ILoginUserData>
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
              className="signUpWrap__innerSection__form__button"
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
