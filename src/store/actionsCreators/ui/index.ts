import { UiActionTypes as types } from '../../actionTypes/ui';

export const openToastAction = (message: string, severity: string) => ({
  type: types.OPEN_TOAST_ACTION,
  payload: { message, severity },
});

export const closeToastAction = () => ({
  type: types.CLOSE_TOAST_ACTION,
});

export const loaderOn = () => ({
  type: types.LOADER_ON_ACTION,
});

export const loaderOff = () => ({
  type: types.LOADER_OFF_ACTION,
});
