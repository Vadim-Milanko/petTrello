import authApi, { IServerResponse } from '../../../api/Auth';
import { UserActionTypes as types } from '../../actionTypes/auth';
import { ILoginUserData } from '../../../pages/LogIn';
import { IUserFields } from '../../../pages/SignUp';

export const loginUserUiAction = async (payload: ILoginUserData) => {
  const loginResponse: IServerResponse = await authApi.loginUser(payload);
  const severity = loginResponse.hasError ? 'warning' : 'success';

  if (!loginResponse.hasError) {
    return {
      type: types.LOGIN_USER_SUCCESS,
      payload: { loginResponse, severity },
    };
  }

  return {
    type: types.LOGIN_USER_ERROR,
    payload: { loginResponse, severity },
  };
};

export const registerUserUiAction = async (payload: IUserFields) => {
  const registerResponse: IServerResponse = await authApi.registerUser(payload);

  const severity = registerResponse.hasError ? 'warning' : 'success';

  if (!registerResponse.hasError) {
    return {
      type: types.REGISTER_USER_SUCCESS,
      payload: { registerResponse, severity },
    };
  }

  return {
    type: types.REGISTER_USER_ERROR,
    payload: { registerResponse, severity },
  };
};
