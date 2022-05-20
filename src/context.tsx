import React, { createContext, Dispatch, useReducer } from 'react';

import { IAppStore } from './store/initialStore';
import { RootActions, rootReducer } from './store/reducers';

export interface IProps {
  store: IAppStore;
  children: JSX.Element;
}

export interface IStoreState {
  storeState: IAppStore;
  dispatch: Dispatch<RootActions | Promise<RootActions>>;
}

export const AppContext = createContext<IStoreState>({} as IStoreState);

function AppContextProvider(props: IProps) {
  const { children, store } = props;

  const [storeState, dispatch] = useReducer(rootReducer, store);

  return (
    <AppContext.Provider value={{
      storeState,
      dispatch,
    }}
    >{children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
