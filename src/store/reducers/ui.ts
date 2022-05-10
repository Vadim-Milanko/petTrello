import { IAppStore } from '../initialStore';
import { TUiActions } from '../actionsCreators/ui/types';
import { UiActionTypes as types } from '../actionTypes/ui';

export function uiReducer(state: IAppStore, action: TUiActions) {
  switch (action.type) {
    case types.LOGIN_UI_SUCCESS:
      return {
        ...state,
        ui: {
          toast: {
            isActive: true,
            message: action.payload.uiResponse.message,
            severity: action.payload.severity,
          },
          loader: {
            isActive: true,
          },
        },
      };
    case types.LOGIN_UI_ERROR:
      return {
        ...state,
        ui: {
          toast: {
            isActive: true,
            message: action.payload.uiResponse.message,
            severity: action.payload.severity,
          },
          loader: {
            isActive: false,
          },
        },
      };
    case types.REGISTER_UI_SUCCESS:
      return {
        ...state,
        ui: {
          toast: {
            isActive: true,
            message: action.payload.uiResponse.message,
            severity: action.payload.severity,
          },
          loader: {
            isActive: true,
          },
        },
      };
    case types.REGISTER_UI_ERROR:
      return {
        ...state,
        ui: {
          toast: {
            isActive: true,
            message: action.payload.uiResponse.message,
            severity: action.payload.severity,
          },
          loader: {
            isActive: false,
          },
        },
      };
    case types.CLOSE_TOAST:
      return {
        ...state,
        ui: {
          ...state.ui,
          toast: {
            ...state.ui.toast,
            isActive: false,
          },
        },
      };

    default:
      return state;
  }
}
