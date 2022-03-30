import React, { memo, useContext } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

import { AppContext } from '../context';

type severityType = 'success' | 'warning';

const CustomToast: React.FC = memo((): JSX.Element => {
  const { storeState, setStoreState } = useContext(AppContext);

  const { ui } = storeState;
  const { toast: { isActive, severity, message } } = ui;

  const closeToast = () => setStoreState({
    ...storeState,
    ui: {
      ...ui,
      toast: {
        ...ui.toast,
        isActive: false,
      },
    },
  });

  return (
    <div>
      {isActive ? (
        <Snackbar open autoHideDuration={3000} onClose={closeToast}>
          <Alert onClose={closeToast} severity={severity as severityType}>
            {message}
          </Alert>
        </Snackbar>
      ) : null}
    </div>
  );
});

export default CustomToast;
