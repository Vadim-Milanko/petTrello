import React from 'react';
import { TextField } from '@material-ui/core';
import { FormikProps } from 'formik';

import ValidationText from './ValidationText';

interface IInputInfo {
  id: string;
  name: string;
  placeholder: string;
}

export interface IProps {
  formInfo: IInputInfo[];
  formik: FormikProps<any>;
  children: JSX.Element;
}

function CustomForm(props: IProps): JSX.Element {
  const { formInfo, formik, children } = props;

  return (
    <form className="signUpWrap__innerSection__form" onSubmit={formik.handleSubmit}>
      {formInfo.map((input) => {
        const { id, name, placeholder } = input;
        const { values, handleBlur, handleChange } = formik;

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
              className="form-control__error"
              formik={formik}
              name={name}
            />
          </div>
        );
      })}
      {children}
    </form>
  );
}

export default CustomForm;
