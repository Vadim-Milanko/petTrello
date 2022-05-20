import { UiActionTypes as types } from '../../actionTypes/ui';

interface IUiActionResponse {
  message: string;
  severity: string;
}

export interface ILoaderOn {
  type: types.LOADER_ON_ACTION;
}

export interface ILoaderOff {
  type: types.LOADER_OFF_ACTION;
}

export interface IOpenToastAction {
  type: types.OPEN_TOAST_ACTION;
  payload: IUiActionResponse;
}

export interface ICloseToastAction {
  type: types.CLOSE_TOAST_ACTION;
}

export type TUiActions =
  | IOpenToastAction
  | ICloseToastAction
  | ILoaderOn
  | ILoaderOff;
