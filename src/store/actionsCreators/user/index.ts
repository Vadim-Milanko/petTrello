import { useNavigate } from 'react-router-dom';

import authApi, { IServerResponse } from '../../../api/Auth';
import { UserActionTypes as types } from '../../actionTypes/auth';
import { ILoginUserData } from '../../../pages/LogIn';
import { setUserToLS } from '../../../utils/localStorage';
import { IUserFields } from '../../../pages/SignUp';

export const loginUserAction = async (payload: ILoginUserData) => {
  const loginResponse: IServerResponse = await authApi.loginUser(payload);
  const navigate = useNavigate();

  if (!loginResponse.hasError) {
    setUserToLS('user', loginResponse.currentUser);
    navigate('/dashboard');

    return {
      type: types.LOGIN_USER_SUCCESS,
      payload: loginResponse,
    };
  }

  return {
    type: types.LOGIN_USER_ERROR,
    payload: loginResponse,
  };
};

export const registerUserAction = async (payload: IUserFields) => {
  const registerResponse: IServerResponse = await authApi.registerUser(payload);

  const navigate = useNavigate();

  if (!registerResponse.hasError) {
    setUserToLS('user', registerResponse.currentUser);
    navigate('/dashboard');

    return {
      type: types.REGISTER_USER_SUCCESS,
      payload: registerResponse,
    };
  }

  return {
    type: types.REGISTER_USER_ERROR,
    payload: registerResponse,
  };
};
