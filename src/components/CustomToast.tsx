import React, { memo } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

import { useCustomSelector } from '../hooks/useCustomSelector';
import { IToast, IUi } from '../store/initialStore';
import { useCustomDispatch } from '../hooks/useCustomDispatch';

type severityType = 'success' | 'warning';

const CustomToast: React.FC = memo((): JSX.Element => {
  const ui = useCustomSelector<IUi>((store) => store.ui);
  const { isActive, severity, message } = useCustomSelector<IToast>((store) => store.ui.toast);
  const dispatch = useCustomDispatch();

  const closeToast = () => dispatch({
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
