import { UiActionTypes as types } from '../../actionTypes/ui';

export const loginToastSuccess = (message: string, severity: string) => ({
  type: types.LOGIN_TOAST_SUCCESS,
  payload: { message, severity },
});

export const loginToastError = (message: string, severity: string) => ({
  type: types.LOGIN_TOAST_ERROR,
  payload: { message, severity },
});

export const registerToastSuccess = (message: string, severity: string) => ({
  type: types.REGISTER_TOAST_SUCCESS,
  payload: { message, severity },
});

export const registerToastSError = (message: string, severity: string) => ({
  type: types.REGISTER_TOAST_ERROR,
  payload: { message, severity },
});

// rewrite on 2 actions

export const closeToastAction = () => ({
  type: types.CLOSE_TOAST,
});

export const loaderOn = () => ({
  type: types.LOADER_ON,
});

export const loaderOff = () => ({
  type: types.LOADER_OFF,
});
