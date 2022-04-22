import { IAppStore } from '../initialStore';
import { TAuthUiActions } from '../actionsCreators/ui/types';
import { UserActionTypes as types } from '../actionTypes/auth';

export function uiReducer(state: IAppStore, action: TAuthUiActions) {
  const { uiResponse, severity } = action.payload;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ui: {
          toast: {
            isActive: true,
            message: uiResponse.message,
            severity,
          },
          loader: {
            isActive: true,
          },
        },
      };
    case types.LOGIN_USER_ERROR:
      return {
        ui: {
          toast: {
            isActive: true,
            message: uiResponse.message,
            severity: uiResponse,
          },
          loader: {
            isActive: false,
          },
        },
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ui: {
          toast: {
            isActive: true,
            message: uiResponse.message,
            severity,
          },
          loader: {
            isActive: true,
          },
        },
      };
    case types.REGISTER_USER_ERROR:
      return {
        ui: {
          toast: {
            isActive: true,
            message: uiResponse.message,
            severity,
          },
          loader: {
            isActive: false,
          },
        },
      };

    default:
      return state;
  }
}
