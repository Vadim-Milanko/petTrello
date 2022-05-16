import { UiActionTypes as types } from '../../actionTypes/ui';

interface IUiActionResponse {
  message: string;
  severity: string;
}

export interface ILoginToastSuccess {
  type: types.LOGIN_TOAST_SUCCESS;
  payload: IUiActionResponse;
}

export interface ILoginToastError {
  type: types.LOGIN_TOAST_ERROR;
  payload: IUiActionResponse;
}

export interface IRegisterToastSuccess {
  type: types.REGISTER_TOAST_SUCCESS;
  payload: IUiActionResponse;
}

export interface IRegisterToastError {
  type: types.REGISTER_TOAST_ERROR;
  payload: IUiActionResponse;
}

export interface ILoaderOn {
  type: types.LOADER_ON;
}

export interface ILoaderOff {
  type: types.LOADER_OFF;
}

export interface ICloseToastAction {
  type: types.CLOSE_TOAST;
}

export type TUiActions =
  ILoginToastSuccess
  | ILoginToastError
  | IRegisterToastSuccess
  | IRegisterToastError
  | ICloseToastAction
  | ILoaderOn
  | ILoaderOff;
