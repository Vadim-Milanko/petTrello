import { ILoginUserData } from '../../pages/LogIn';
import authApi, { IServerResponse } from '../../api/Auth';
import {
  loginUserError,
  loginUserSuccess,
  registerUserAction, registerUserError,
} from '../actionsCreators/user';
import { IUserFields } from '../../pages/SignUp';
import {
  loaderOff,
  loaderOn,
  loginToastError,
  loginToastSuccess,
  registerToastSError, registerToastSuccess,
} from '../actionsCreators/ui';
import { setUserToLS } from '../../utils/localStorage';

export const loginUser = (
  payload: ILoginUserData,
  dashboardNavigate: () => void,
) => async (dispatch: any) => {
  const loginResponse: IServerResponse = await authApi.loginUser(payload);
  const severity = loginResponse.hasError ? 'warning' : 'success';

  if (!loginResponse.hasError) {
    setUserToLS('user', loginResponse.currentUser);
    dispatch(loginUserSuccess(loginResponse));
    dispatch(loginToastSuccess(loginResponse, severity));
    dispatch(loaderOn());
    dashboardNavigate();
  } else {
    dispatch(loginUserError(loginResponse));
    dispatch(loginToastError(loginResponse, severity));
    dispatch(loaderOff());
  }
};

export const registerUser = (
  payload: IUserFields,
  dashboardNavigate: () => void,
) => async (dispatch: any) => {
  const registerResponse: IServerResponse = await authApi.registerUser(payload);
  const severity = registerResponse.hasError ? 'warning' : 'success';

  if (!registerResponse.hasError) {
    setUserToLS('user', registerResponse.currentUser);
    dispatch(registerUserAction(registerResponse));
    dispatch(registerToastSuccess(registerResponse, severity));
    dispatch(loaderOn());

    dashboardNavigate();
  } else {
    dispatch(registerUserError(registerResponse));
    dispatch(registerToastSError(registerResponse, severity));
    dispatch(loaderOff());
  }
};
