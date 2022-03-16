import React, { FormEvent } from 'react';
import { TextField } from '@material-ui/core';
import { FormikErrors, FormikTouched } from 'formik';

import ValidationText from './ValidationText';
import { authFormFields, IUser } from '../pages/SignUp/SignUp';
import { ILoginUserData } from "../pages/LogIn/LogIn";

interface IInputInfo {
  id: string;
  name: authFormFields;
  placeholder: string;
}

export interface IProps {
  children: JSX.Element;
  formClassName: string;
  formInfo: IInputInfo[];
  values: IUser | ILoginUserData;
  handleBlur: (e: FocusEvent) => void;
  handleSubmit: () => void;
  handleChange: (value: FormEvent) => void;
  touched: FormikTouched<IUser>;
  errors: FormikErrors<IUser>;
}

function CustomForm(props: IProps): JSX.Element {
  const {
    formClassName,
    formInfo,
    children,
    values,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    errors,
  } = props;

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      {formInfo.map((input) => {
        const { id, name, placeholder } = input;
        const isVisibleValidation = touched[name] && errors[name];

        return (
          <div key={id} className="form-control">
            <TextField
              id={id}
              name={name}
              placeholder={placeholder}
              variant="outlined"
              onChange={handleChange}
              value={values[name]}
              onBlur={handleBlur}
            />
            <ValidationText
              validationClassName="form-control__error"
              visible={isVisibleValidation}
              errorText={errors[name]}
            />
          </div>
        );
      })}
      {children}
    </form>
  );
}

export default CustomForm;
