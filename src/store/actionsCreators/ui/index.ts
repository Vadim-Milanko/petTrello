import { IServerResponse } from '../../../api/Auth';
import { UiActionTypes as types } from '../../actionTypes/ui';

export const loginToastSuccess = (payload: IServerResponse, severity: string) => ({
  type: types.LOGIN_TOAST_SUCCESS,
  payload: { uiResponse: payload, severity },
});

export const loginToastError = (payload: IServerResponse, severity: string) => ({
  type: types.LOGIN_TOAST_ERROR,
  payload: { uiResponse: payload, severity },
});

export const registerToastSuccess = (payload: IServerResponse, severity: string) => ({
  type: types.REGISTER_TOAST_SUCCESS,
  payload: { uiResponse: payload, severity },
});

export const registerToastSError = (payload: IServerResponse, severity: string) => ({
  type: types.REGISTER_TOAST_ERROR,
  payload: { uiResponse: payload, severity },
});

export const closeToastAction = () => ({
  type: types.CLOSE_TOAST,
});

export const loaderOn = () => ({
  type: types.LOADER_ON,
});

export const loaderOff = () => ({
  type: types.LOADER_OFF,
});
