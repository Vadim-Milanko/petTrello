import React, { useState } from 'react';
import { IServerResponse } from './pages/SignUp/SignUp';

interface IProps {
  children: JSX.Element;
}

interface IUi {
  isToastActive: boolean;
  setIsToastActive: (status: boolean) => void;
}

interface IUserPayload {
  serverResponse: IServerResponse;
  setServerResponse: (response: IServerResponse) => void;
}

export interface IAppContext {
  user: IUserPayload;
  ui: IUi;
}

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

function AppContextProvider(props: IProps) {
  const { children } = props;

  const [isToastActive, setIsToastActive] = useState<boolean>(false);
  const [serverResponse, setServerResponse] = useState<IServerResponse>({} as IServerResponse);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    user: {
      serverResponse,
      setServerResponse,
    },
    ui: {
      isToastActive,
      setIsToastActive,
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
