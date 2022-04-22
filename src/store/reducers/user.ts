import { IAppStore } from '../initialStore';
import { UserActionTypes as types } from '../actionTypes/auth';
import { TAuthUserActions } from '../actionsCreators/user/types';

export function userReducer(state: IAppStore, action: TAuthUserActions) {
  const { currentUser } = action.payload;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        user: currentUser,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        user: currentUser,
      };

    default:
      return state;
  }
}
