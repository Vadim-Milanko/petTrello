import { useContext } from 'react';

import { AppContext } from '../context';

export const useCustomDispatch = () => {
  const { dispatch } = useContext(AppContext);

  const dispatchWrapper = (action: any): void => {
    if (typeof action === 'function') {
      dispatch(action(dispatch));
    } else {
      dispatch(action);
    }
  };

  return dispatchWrapper;
};
