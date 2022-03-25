import React, { memo, useContext } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

import { AppContext } from '../context';

export interface IProps {
  message: string | undefined;
  toastSeverity: boolean;
}

const CustomToast: React.FC<IProps> = memo((props: IProps): JSX.Element => {
  const {
    message,
    toastSeverity,
  } = props;

  const { storeState, setStoreState } = useContext(AppContext);

  const closeToast = () => setStoreState({
    ...storeState,
    ui: {
      ...storeState.ui,
      isToastActive: false,
    },
  });

  return (
    <Snackbar open autoHideDuration={3000} onClose={closeToast}>
      <Alert onClose={closeToast} severity={toastSeverity ? 'success' : 'warning'}>
        {message}
      </Alert>
    </Snackbar>
  );
});

export default CustomToast;
