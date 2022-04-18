import { useContext } from 'react';

import { AppContext } from '../context';

export const useCustomDispatch = () => {
  const { storeState, setStoreState } = useContext(AppContext);

  function dispatch <T>(payload: T) {
    setStoreState({
      ...storeState,
      ...payload,
    });
  }

  return dispatch;
};
