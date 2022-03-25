import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import api from '../../api/Api';
import CustomForm from '../../components/CustomForm';
import CustomButton from '../../components/CustomButton';
import { logInSchema } from '../../utils/validationSchema';
import logo from '../../assets/images/Trello_logo.svg';
import { AppContext } from '../../context';

import '../SignUp/style.scss';
import { setUserToLS } from '../../utils/localStorage';

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
  const { storeState, setStoreState } = useContext(AppContext);

  const history = createBrowserHistory();

  const onSubmit = async (userData: ILoginUserData) => {
    const loginUserResponse = await api.loginUser(userData);

    const {
      message,
      hasError,
      currentUser,
      currentUser: { login, email },
    } = loginUserResponse;
    setStoreState({
      ...storeState,
      ui: {
        isToastActive: true,
        message,
      },
      user: {
        login,
        email,
      },
    });

    if (!hasError) {
      setUserToLS('user', currentUser);
      history.push('/dashboard');
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
