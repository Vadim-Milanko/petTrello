import React, { FormEvent } from 'react';
import {
  OutlinedInput, OutlinedInputProps,
} from '@material-ui/core';
import { FormikErrors, FormikTouched } from 'formik';

import ValidationText from './ValidationText';

interface IInputInfo<T> {
  id: string;
  name: keyof T;
  placeholder: string;
}

export interface IProps<T> {
  children: JSX.Element | JSX.Element[];
  formClassName: string;
  inputClassName?: string;
  formInfo: IInputInfo<T>[];
  values: T;
  handleBlur: (event: OutlinedInputProps) => void;
  handleSubmit: () => void;
  handleChange: (value: FormEvent) => void;
  touched: FormikTouched<T>;
  errors: FormikErrors<T>;
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
        const isInputFilled = ((values[name] as unknown as string).trim() !== '');
        const inputValue = isInputFilled
          ? values[name] as unknown as string
          : (values[name] as unknown as string).trim();
        const type = (name === 'password' ? name : 'text');

        return (
          <div key={id} className="form-control">
            <OutlinedInput
              className={inputClassName}
              id={id}
              name={name as string}
              placeholder={placeholder}
              onChange={handleChange}
              value={inputValue}
              onBlur={handleBlur}
              autoFocus={focus}
              type={type as string}
            />
            <ValidationText
              className="form-control__error"
              visible={!!isVisibleValidation}
              errorText={errors[name] as unknown as string}
            />
          </div>
        );
      })}
      {children}
    </form>
  );
}

export default CustomForm;
