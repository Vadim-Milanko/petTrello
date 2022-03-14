import React, { memo } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

import { IRegisterResponse } from '../pages/SignUp/SignUp';

export interface IProps {
  message: string | undefined;
  setToastVisible: (isVisible: boolean) => void;
  response: IRegisterResponse | null ;
}

const CustomToast: React.FC<IProps> = memo((props: IProps): JSX.Element => {
  const { setToastVisible, message, response } = props;

  const closeToast = () => setToastVisible(false);

  return (
    <Snackbar open autoHideDuration={3000} onClose={closeToast}>
      <Alert onClose={closeToast} severity={response?.hasError ? 'warning' : 'success'}>
        {message}
      </Alert>
    </Snackbar>
  );
});

export default CustomToast;
