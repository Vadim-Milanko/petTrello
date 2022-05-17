import { initialStore, IUi } from '../initialStore';
import { TUiActions } from '../actionsCreators/ui/types';
import { UiActionTypes as types } from '../actionTypes/ui';

export function uiReducer(state: IUi, action: TUiActions) {
  switch (action.type) {
    case types.LOGIN_TOAST_SUCCESS:
      return {
        ...state,
        toast: {
          isActive: true,
          message: action.payload.message,
          severity: action.payload.severity,
        },
      };

    case types.LOGIN_TOAST_ERROR:
      return {
        ...state,
        toast: {
          isActive: true,
          message: action.payload.message,
          severity: action.payload.severity,
        },
      };

    case types.REGISTER_TOAST_SUCCESS:
      return {
        ...state,
        toast: {
          isActive: true,
          message: action.payload.message,
          severity: action.payload.severity,
        },
      };

    case types.REGISTER_TOAST_ERROR:
      return {
        ...state,
        toast: {
          isActive: true,
          message: action.payload.message,
          severity: action.payload.severity,
        },
      };

    case types.LOADER_ON:
      return {
        ...state,
        loader: {
          isActive: true,
        },
      };

    case types.LOADER_OFF:
      return {
        ...state,
        loader: {
          isActive: false,
        },
      };

    case types.CLOSE_TOAST:
      return {
        ...state,
        toast: initialStore.ui.toast,
      };

    default:
      return state;
  }
}
