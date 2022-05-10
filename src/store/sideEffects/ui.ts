import { ILoginUserData } from '../../pages/LogIn';
import authApi, { IServerResponse } from '../../api/Auth';
import { IUserFields } from '../../pages/SignUp';
import { loginUiAction, registerUiAction } from '../actionsCreators/ui';

export const loginUi = (
  payload: ILoginUserData,
) => async (dispatch: any) => {
  const loginResponse: IServerResponse = await authApi.loginUser(payload);

  dispatch(loginUiAction(loginResponse));
};

export const registerUi = (
  payload: IUserFields,
) => async (dispatch: any) => {
  const registerResponse: IServerResponse = await authApi.registerUser(payload);

  dispatch(registerUiAction(registerResponse));
};
