import React from 'react';
import { useFormik } from 'formik';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { IUser } from '../SignUp/SignUp';
import CustomForm from '../../components/CustomForm';
import CustomButton from '../../components/CustomButton';
import { logInSchema } from '../../utils/validationSchema';
import logo from '../../assets/images/Trello_logo.svg';

import '../SignUp/style.scss';

const initialValues = {
  email: '',
  password: '',
};

type authFormFields = 'email' | 'password';

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

export interface IUsers {
  users: IUser[];
}

interface IProps {
  isLogin: boolean;
  setIsLogin: (status: boolean) => void;
}

function LogIn(props: IProps): JSX.Element {
  const { isLogin, setIsLogin } = props;

  console.log(isLogin, setIsLogin);

  const onSubmit = async (values: ILoginUserData) => {
    try {
      console.log(values);
    } catch (err) {
      console.log(err);
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
