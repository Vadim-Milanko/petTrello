import { useContext } from 'react';

import { AppContext } from '../context';
import { IAppStore } from '../store/initialStore';

export function useCustomSelector<T>(cb: (store: IAppStore) => T) {
  const { storeState } = useContext(AppContext);

  return cb(storeState);
}
