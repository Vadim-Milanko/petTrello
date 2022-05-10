import { IServerResponse } from '../../../api/Auth';
import { UserActionTypes as types } from '../../actionTypes/user';
import { setUserToLS } from '../../../utils/localStorage';
import { ILogoutUserAction } from './types';

export const loginUserAction = async (payload: IServerResponse, dashboardNavigate: () => void) => {
  if (!payload.hasError) {
    setUserToLS('user', payload.currentUser);
    dashboardNavigate();

    return {
      type: types.LOGIN_USER_SUCCESS,
      payload,
    };
  }

  return {
    type: types.LOGIN_USER_ERROR,
    payload,
  };
};

export const registerUserAction = async (
  payload: IServerResponse,
  dashboardNavigate: () => void,
) => {
  if (!payload.hasError) {
    setUserToLS('user', payload.currentUser);
    dashboardNavigate();

    return {
      type: types.REGISTER_USER_SUCCESS,
      payload,
    };
  }

  return {
    type: types.REGISTER_USER_ERROR,
    payload,
  };
};

export const logoutUserAction = (homeNavigate: () => void): ILogoutUserAction => {
  homeNavigate();

  return {
    type: types.LOGOUT_USER_SUCCESS,
  };
};
