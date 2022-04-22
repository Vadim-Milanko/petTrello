import { UserActionTypes as types } from '../../actionTypes/auth';
import { IServerResponse } from '../../../api/Auth';

interface IUiActionResponse {
  uiResponse: IServerResponse;
  severity: string;
}

export interface IUiLoginUserSuccess {
  type: types.LOGIN_USER_SUCCESS;
  payload: IUiActionResponse;
}

export interface IUiLoginUserError {
  type: types.LOGIN_USER_ERROR;
  payload: IUiActionResponse;
}

export interface IUiRegisterUserSuccess {
  type: types.REGISTER_USER_SUCCESS;
  payload: IUiActionResponse;
}

export interface IUiRegisterUserError {
  type: types.REGISTER_USER_ERROR;
  payload: IUiActionResponse;
}

export type TAuthUiActions =
  IUiLoginUserSuccess
  | IUiLoginUserError
  | IUiRegisterUserSuccess
  | IUiRegisterUserError;
