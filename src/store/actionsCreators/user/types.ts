import { UserActionTypes as types } from '../../actionTypes/user';
import { IServerResponse } from '../../../api/Auth';

export interface ILoginUserSuccess {
  type: types.LOGIN_USER_SUCCESS;
  payload: IServerResponse;
}

export interface IRegisterUserSuccess {
  type: types.REGISTER_USER_SUCCESS;
  payload: IServerResponse;
}

export interface ILogoutUserAction {
  type: types.LOGOUT_USER_SUCCESS;
}

export type TAuthUserActions =
  ILoginUserSuccess
  | ILogoutUserAction
  | IRegisterUserSuccess;
