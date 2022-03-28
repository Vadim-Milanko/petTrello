import React, { memo, useContext } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

import { AppContext } from '../context';

type severityType = 'success' | 'warning';

const CustomToast: React.FC = memo((): JSX.Element => {
  const { storeState, setStoreState } = useContext(AppContext);

  const closeToast = () => setStoreState({
    ...storeState,
    ui: {
      toast: {
        ...storeState.ui.toast,
        isActive: false,
      },
      loader: {
        ...storeState.ui.loader,
      },
    },
  });

  return (
    <Snackbar open autoHideDuration={3000} onClose={closeToast}>
      <Alert onClose={closeToast} severity={storeState.ui.toast.severity as severityType}>
        {storeState.ui.toast.message}
      </Alert>
    </Snackbar>
  );
});

export default CustomToast;
