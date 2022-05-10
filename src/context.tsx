import React, { createContext, Dispatch, useReducer } from 'react';

import { IAppStore, initialStore } from './store/initialStore';
import { ActionTypes, combineReducers } from './store/rootReducer/combineReducer';
import { boardReducer } from './store/reducers/board';
import { uiReducer } from './store/reducers/ui';
import { userReducer } from './store/reducers/user';

export interface IProps {
  children: JSX.Element;
}

export interface IStoreState {
  storeState: IAppStore;
  dispatch: Dispatch<ActionTypes>;
}

export const AppContext = createContext<IStoreState>({} as IStoreState);

function AppContextProvider(props: IProps) {
  const { children } = props;

  const rootReducer = combineReducers({
    boardReducer,
    uiReducer,
    userReducer,
  });

  const [storeState, dispatch] = useReducer(rootReducer, initialStore);

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
