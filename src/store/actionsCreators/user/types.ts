import { UserActionTypes as types } from '../../actionTypes/user';
import { IUser } from '../../initialStore';

export interface ILoginUserSuccess {
  type: types.LOGIN_USER_SUCCESS;
  payload: IUser;
}

export interface ILoginUserError {
  type: types.LOGIN_USER_ERROR;
  payload: IUser;
}

export interface IRegisterUserSuccess {
  type: types.REGISTER_USER_SUCCESS;
  payload: IUser;
}

export interface IRegisterUserError {
  type: types.REGISTER_USER_ERROR;
  payload: IUser;
}

export interface ILogoutUserAction {
  type: types.LOGOUT_USER_ACTION;
}

export type TAuthUserActions =
  ILoginUserSuccess
  | ILoginUserError
  | IRegisterUserSuccess
  | IRegisterUserError
  | ILogoutUserAction;
