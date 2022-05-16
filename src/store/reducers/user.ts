import { IAppStore, initialStore } from '../initialStore';
import { UserActionTypes as types } from '../actionTypes/user';
import { TAuthUserActions } from '../actionsCreators/user/types';

export function userReducer(state: IAppStore, action: TAuthUserActions) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS: {
      const updatedState = { ...state };

      updatedState.user = action.payload;

      return updatedState;
    }
    case types.LOGIN_USER_ERROR: {
      const updatedState = { ...state };

      updatedState.user = action.payload;

      return updatedState;
    }
    case types.REGISTER_USER_SUCCESS: {
      const updatedState = { ...state };

      updatedState.user = action.payload;

      return updatedState;
    }
    case types.REGISTER_USER_ERROR: {
      const updatedState = { ...state };

      updatedState.user = action.payload;

      return updatedState;
    }
    case types.LOGOUT_USER_ACTION:
      return {
        ...initialStore,
      };

    default:
      return state;
  }
}
