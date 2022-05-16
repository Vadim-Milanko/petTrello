import { UserActionTypes as types } from '../../actionTypes/user';
import { ILogoutUserAction } from './types';
import { IUser } from '../../initialStore';

export const loginUserSuccess = (payload: IUser) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserError = (payload: IUser) => ({
  type: types.LOGIN_USER_ERROR,
  payload,
});

export const registerUserAction = (payload: IUser) => ({
  type: types.REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserError = (payload: IUser) => ({
  type: types.REGISTER_USER_ERROR,
  payload,
});

export const logoutUserAction = (homeNavigate: () => void): ILogoutUserAction => {
  homeNavigate();

  return {
    type: types.LOGOUT_USER_ACTION,
  };
};
