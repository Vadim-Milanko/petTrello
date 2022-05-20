import { ILoginUserData } from '../../pages/LogIn';
import authApi, { IServerResponse } from '../../api/Auth';
import { authUserAction } from '../actionsCreators/user';
import { IUserFields } from '../../pages/SignUp';
import {
  loaderOff,
  loaderOn,
  loginToastError,
  loginToastSuccess,
  registerToastSError, registerToastSuccess,
} from '../actionsCreators/ui';
import { setUserToLS } from '../../utils/localStorage';

export const loginUser = (payload: ILoginUserData, dashboardNavigate: () => void) => (
  async (dispatch: any) => {
    dispatch(loaderOn());

    const loginResponse: IServerResponse = await authApi.loginUser(payload);
    const severity = loginResponse.hasError ? 'warning' : 'success';

    if (!loginResponse.hasError) {
      setUserToLS('user', loginResponse.currentUser);
      dispatch(loginToastSuccess(loginResponse.message, severity));
      dashboardNavigate();
    } else {
      dispatch(loginToastError(loginResponse.message, severity));
    }

    authUserAction(loginResponse.currentUser);
    dispatch(loaderOff());
  }
);

export const registerUser = (payload: IUserFields, dashboardNavigate: () => void) => (
  async (dispatch: any) => {
    dispatch(loaderOn());

    const registerResponse: IServerResponse = await authApi.registerUser(payload);
    const severity = registerResponse.hasError ? 'warning' : 'success';

    if (!registerResponse.hasError) {
      setUserToLS('user', registerResponse.currentUser);
      dispatch(registerToastSuccess(registerResponse.message, severity));

      dashboardNavigate();
    } else {
      dispatch(registerToastSError(registerResponse.message, severity));
    }

    authUserAction(registerResponse.currentUser);
    dispatch(loaderOff());
  }
);
