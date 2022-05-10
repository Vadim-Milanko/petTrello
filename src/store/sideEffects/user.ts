import { ILoginUserData } from '../../pages/LogIn';
import authApi, { IServerResponse } from '../../api/Auth';
import { loginUserAction, registerUserAction } from '../actionsCreators/user';
import { IUserFields } from '../../pages/SignUp';

export const loginUser = (
  payload: ILoginUserData,
  dashboardNavigate: () => void,
) => async (dispatch: any) => {
  const loginResponse: IServerResponse = await authApi.loginUser(payload);

  dispatch(loginUserAction(loginResponse, dashboardNavigate));
};

export const registerUser = (
  payload: IUserFields,
  dashboardNavigate: () => void,
) => async (dispatch: any) => {
  const registerResponse: IServerResponse = await authApi.registerUser(payload);

  dispatch(registerUserAction(registerResponse, dashboardNavigate));
};
