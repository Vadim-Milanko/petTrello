import { IServerResponse } from '../../../api/Auth';
import { UserActionTypes as types } from '../../actionTypes/user';
import { ILogoutUserAction } from './types';

export const loginUserSuccess = (payload: IServerResponse) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserError = (payload: IServerResponse) => ({
  type: types.LOGIN_USER_ERROR,
  payload,
});

export const registerUserAction = (payload: IServerResponse) => ({
  type: types.REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserError = (payload: IServerResponse) => ({
  type: types.REGISTER_USER_ERROR,
  payload,
});

export const logoutUserAction = (homeNavigate: () => void): ILogoutUserAction => {
  homeNavigate();

  return {
    type: types.LOGOUT_USER_SUCCESS,
  };
};
