import React, { FormEvent } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { FormikErrors, FormikTouched } from 'formik';

import ValidationText from './ValidationText';
import { authFormFields as signUpAuth, IUserFields } from '../pages/SignUp/SignUp';
import { authFormFields as loginAuth } from '../pages/LogIn/LogIn';
import { IBoardData, popoverFormFields } from '../pages/Dashboard/components/PopoverWindow/PopoverWindow';

interface IInputInfo {
  id: string;
  name: signUpAuth | loginAuth | popoverFormFields;
  placeholder: string;
}

type FormTouchedType = FormikTouched<IUserFields | IBoardData>;
type FormErrorsType = FormikErrors<IUserFields | IBoardData>;

export interface IProps<T> {
  children: JSX.Element | JSX.Element[];
  formClassName: string;
  inputClassName?: string;
  formInfo: IInputInfo[];
  values: IUserFields | IBoardData;
  handleBlur: (event: TextFieldProps) => void;
  handleSubmit: () => void;
  handleChange: (value: FormEvent) => void;
  touched: FormTouchedType;
  errors: FormErrorsType;
  focus?: boolean;
}

function CustomForm<T>(props: IProps<T>): JSX.Element {
  const {
    formClassName,
    inputClassName,
    formInfo,
    children,
    values,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    errors,
    focus = false,
  } = props;

  return (
    <form className={formClassName} onSubmit={handleSubmit}>
      {formInfo.map((input) => {
        const { id, name, placeholder } = input;
        const isVisibleValidation = touched[name] && errors[name];

        return (
          <div key={id} className="form-control">
            <TextField
              className={inputClassName}
              id={id}
              name={name}
              placeholder={placeholder}
              variant="outlined"
              onChange={handleChange}
              value={values[name].trim()}
              onBlur={handleBlur}
              autoFocus={focus}
            />
            <ValidationText
              className="form-control__error"
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
