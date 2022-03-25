import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import { useFormik } from 'formik';
import { createBrowserHistory } from 'history';

import api from '../../api/Api';
import { signUpSchema } from '../../utils/validationSchema';
import CustomForm from '../../components/CustomForm';
import CustomButton from '../../components/CustomButton';
import logo from '../../assets/images/Trello_logo.svg';

import './style.scss';
import { AppContext } from '../../context';
import { setUserToLS } from '../../utils/localStorage';

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

export interface IUserFields {
  login?: string;
  email: string;
  password?: string;
}

function SignUp(): JSX.Element {
  const history = createBrowserHistory();

  const { storeState, setStoreState } = useContext(AppContext);

  const onSubmit = async (values: IUserFields) => {
    const userResponse = await api.registerUser(values);
    const {
      currentUser,
      currentUser: { login, email },
    } = userResponse;

    setStoreState({
      ...storeState,
      ui: {
        isToastActive: true,
        message: userResponse.message,
      },
      user: {
        login,
        email,
      },
    });

    if (!userResponse.hasError) {
      setUserToLS('user', currentUser);
      history.push('/dashboard');
    }
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
    </div>
  );
}

export default SignUp;
