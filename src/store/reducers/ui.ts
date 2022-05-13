import { IAppStore, initialStore } from '../initialStore';
import { TUiActions } from '../actionsCreators/ui/types';
import { UiActionTypes as types } from '../actionTypes/ui';

// eslint-disable-next-line default-param-last
export function uiReducer(state: IAppStore = initialStore, action: TUiActions) {
  switch (action.type) {
    case types.LOGIN_TOAST_SUCCESS:
      return {
        ...state,
        ui: {
          ...state.ui.loader,
          toast: {
            isActive: true,
            message: action.payload.uiResponse.message,
            severity: action.payload.severity,
          },
        },
      };
    case types.LOGIN_TOAST_ERROR:
      return {
        ...state,
        ui: {
          ...state.ui.loader,
          toast: {
            isActive: true,
            message: action.payload.uiResponse.message,
            severity: action.payload.severity,
          },
        },
      };
    case types.REGISTER_TOAST_SUCCESS:
      return {
        ...state,
        ui: {
          ...state.ui.loader,
          toast: {
            isActive: true,
            message: action.payload.uiResponse.message,
            severity: action.payload.severity,
          },
        },
      };
    case types.REGISTER_TOAST_ERROR:
      return {
        ...state,
        ui: {
          ...state.ui.loader,
          toast: {
            isActive: true,
            message: action.payload.uiResponse.message,
            severity: action.payload.severity,
          },
        },
      };
    case types.LOADER_ON:
      return {
        ...state,
        ui: {
          ...state.ui.toast,
          loader: {
            isActive: true,
          },
        },
      };
    case types.LOADER_OFF:
      return {
        ...state,
        ui: {
          ...state.ui.toast,
          loader: {
            isActive: false,
          },
        },
      };
    case types.CLOSE_TOAST: {
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
    }

    default:
      return state;
  }
}
