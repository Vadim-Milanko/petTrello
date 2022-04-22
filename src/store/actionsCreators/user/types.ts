import { UserActionTypes as types } from '../../actionTypes/auth';
import { IServerResponse } from '../../../api/Auth';

export interface ILoginUserSuccess {
  type: types.LOGIN_USER_SUCCESS;
  payload: IServerResponse;
}

export interface IRegisterUserSuccess {
  type: types.REGISTER_USER_SUCCESS;
  payload: IServerResponse;
}

export type TAuthUserActions =
  ILoginUserSuccess
  | IRegisterUserSuccess
