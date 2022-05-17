import { initialStore, IUser } from '../initialStore';
import { UserActionTypes as types } from '../actionTypes/user';
import { TAuthUserActions } from '../actionsCreators/user/types';

export function userReducer(_state: IUser, action: TAuthUserActions) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return action.payload;

    case types.LOGIN_USER_ERROR:
      return action.payload;

    case types.REGISTER_USER_SUCCESS:
      return action.payload;

    case types.REGISTER_USER_ERROR:
      return action.payload;

    case types.LOGOUT_USER_ACTION:
      return initialStore.user;

    default:
      return initialStore.user;
  }
}
