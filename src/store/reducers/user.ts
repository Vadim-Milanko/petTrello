import { IAppStore, initialStore } from '../initialStore';
import { UserActionTypes as types } from '../actionTypes/user';
import { TAuthUserActions } from '../actionsCreators/user/types';

export function userReducer(state: IAppStore, action: TAuthUserActions) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.currentUser,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.currentUser,
      };
    case types.LOGOUT_USER_SUCCESS:
      return {
        ...initialStore,
      };

    default:
      return state;
  }
}
