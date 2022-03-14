import React from 'react';
import { FormikProps } from 'formik';

interface IProps {
  className: string;
  formik: FormikProps<any>;
  name: string;
}

function ValidationText(props: IProps): JSX.Element {
  const { className, formik: { touched, errors }, name } = props;

  return (
    <div>
      {
        touched[name] && errors[name]
          ? (
            <div className={className}>
              {errors[name]}
            </div>
          ) : null
      }
    </div>
  );
}

export default ValidationText;
