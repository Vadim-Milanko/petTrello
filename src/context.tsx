import React, { useState, createContext } from 'react';

export interface IUser {
  login: string;
  email: string;
}

interface IToast {
  isActive: boolean;
  message: string;
  severity: string;
}

interface ILoader {
  isActive: boolean;
}

interface IUi {
  toast: IToast;
  loader: ILoader;
}

export interface IAppStore {
  user: IUser;
  ui: IUi;
}

interface IProps {
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
