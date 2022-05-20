import { initialStore, IUi } from '../initialStore';
import { TUiActions } from '../actionsCreators/ui/types';
import { UiActionTypes as types } from '../actionTypes/ui';

export function uiReducer(state: IUi, action: TUiActions) {
  switch (action.type) {
    case types.OPEN_TOAST_ACTION:
      return {
        ...state,
        toast: {
          isActive: true,
          message: action.payload.message,
          severity: action.payload.severity,
        },
      };

    case types.CLOSE_TOAST_ACTION:
      return {
        ...state,
        toast: initialStore.ui.toast,
      };

    case types.LOADER_ON_ACTION:
      return {
        ...state,
        loader: {
          isActive: true,
        },
      };

    case types.LOADER_OFF_ACTION:
      return {
        ...state,
        loader: {
          isActive: false,
        },
      };

    default:
      return state;
  }
}
