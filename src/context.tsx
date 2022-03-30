import React, { useState, createContext } from 'react';

import { IAppStore } from './store/initialStore';

export interface IProps {
  children: JSX.Element;
  store: IAppStore;
}

export interface IStoreState {
  storeState: IAppStore;
  setStoreState: (value: IAppStore) => void;
}

export const AppContext = createContext<IStoreState>({} as IStoreState);

function AppContextProvider(props: IProps) {
  const { children, store } = props;

  const [storeState, setStoreState] = useState(store);

  return (
    <AppContext.Provider value={{
      storeState,
      setStoreState,
    }}
    >{children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
