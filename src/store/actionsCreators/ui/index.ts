import { IServerResponse } from '../../../api/Auth';
import { UiActionTypes as types } from '../../actionTypes/ui';

export const loginUiAction = async (payload: IServerResponse) => {
  const severity = payload.hasError ? 'warning' : 'success';

  console.log(payload);

  if (!payload.hasError) {
    return {
      type: types.LOGIN_UI_SUCCESS,
      payload: { payload, severity },
    };
  }

  return {
    type: types.LOGIN_UI_ERROR,
    payload: { payload, severity },
  };
};

export const registerUiAction = (payload: IServerResponse) => {
  const severity = payload.hasError ? 'warning' : 'success';

  if (!payload.hasError) {
    return {
      type: types.REGISTER_UI_SUCCESS,
      payload: { payload, severity },
    };
  }

  return {
    type: types.REGISTER_UI_ERROR,
    payload: { payload, severity },
  };
};

export const closeToastAction = () => ({
  type: types.CLOSE_TOAST,
});
