import React, { memo } from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

import { useCustomSelector } from '../hooks/useCustomSelector';
import { useCustomDispatch } from '../hooks/useCustomDispatch';
import { IUi } from '../store/initialStore';
import { closeToastAction } from '../store/actionsCreators/ui';

type severityType = 'success' | 'warning';

const CustomToast: React.FC = memo((): JSX.Element => {
  const dispatch = useCustomDispatch();
  const ui = useCustomSelector<IUi>((store) => store.ui);
  const { isActive, severity, message } = ui.toast;

  const closeToast = () => dispatch(closeToastAction());

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
