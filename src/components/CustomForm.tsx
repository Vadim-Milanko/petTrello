import React, { FormEvent } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { FormikErrors, FormikTouched } from 'formik';

import ValidationText from './ValidationText';
import { authFormFields as signUpAuth, IUserFields } from '../pages/SignUp/SignUp';
import { authFormFields as loginAuth } from '../pages/LogIn/LogIn';

interface IInputInfo {
  id: string;
  name: signUpAuth | loginAuth;
  placeholder: string;
}

export interface IProps {
  children: JSX.Element;
  formClassName: string;
  formInfo: IInputInfo[];
  values: IUserFields;
  handleBlur: (event: TextFieldProps) => void;
  handleSubmit: () => void;
  handleChange: (value: FormEvent) => void;
  touched: FormikTouched<IUserFields>;
  errors: FormikErrors<IUserFields>;
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
