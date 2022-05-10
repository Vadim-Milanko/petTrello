import { IServerResponse } from '../../../api/Auth';
import { UiActionTypes as types } from '../../actionTypes/ui';

interface IUiActionResponse {
  uiResponse: IServerResponse;
  severity: string;
}

export interface IUiLoginUserSuccess {
  type: types.LOGIN_UI_SUCCESS;
  payload: IUiActionResponse;
}

export interface IUiLoginUserError {
  type: types.LOGIN_UI_ERROR;
  payload: IUiActionResponse;
}

export interface IUiRegisterUserSuccess {
  type: types.REGISTER_UI_SUCCESS;
  payload: IUiActionResponse;
}

export interface IUiRegisterUserError {
  type: types.REGISTER_UI_ERROR;
  payload: IUiActionResponse;
}

export interface ICloseToastAction {
  type: types.CLOSE_TOAST;
}

export type TUiActions =
  IUiLoginUserSuccess
  | IUiLoginUserError
  | IUiRegisterUserSuccess
  | IUiRegisterUserError
  | ICloseToastAction;
