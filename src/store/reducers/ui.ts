import { IAppStore, initialStore } from '../initialStore';
import { TUiActions } from '../actionsCreators/ui/types';
import { UiActionTypes as types } from '../actionTypes/ui';

export function uiReducer(state: IAppStore = initialStore, action: TUiActions) {
  switch (action.type) {
    case types.LOGIN_TOAST_SUCCESS: {
      const updatedState = { ...state };

      updatedState.ui.toast = {
        isActive: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };

      return updatedState;
    }
    case types.LOGIN_TOAST_ERROR: {
      const updatedState = { ...state };

      updatedState.ui.toast = {
        isActive: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };

      return updatedState;
    }
    case types.REGISTER_TOAST_SUCCESS: {
      const updatedState = { ...state };

      updatedState.ui.toast = {
        isActive: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };

      return updatedState;
    }
    case types.REGISTER_TOAST_ERROR: {
      const updatedState = { ...state };

      updatedState.ui.toast = {
        isActive: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };

      return updatedState;
    }
    case types.LOADER_ON: {
      const updatedState = { ...state };

      updatedState.ui.loader.isActive = true;

      return updatedState;
    }
    case types.LOADER_OFF: {
      const updatedState = { ...state };

      updatedState.ui.loader.isActive = false;

      return updatedState;
    }
    case types.CLOSE_TOAST: {
      const updatedState = { ...state };

      updatedState.ui.toast.isActive = false;

      return updatedState;
    }

    default:
      return state;
  }
}
