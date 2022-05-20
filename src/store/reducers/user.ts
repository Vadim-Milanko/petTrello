import { initialStore, IUser } from '../initialStore';
import { UserActionTypes as types } from '../actionTypes/user';
import { TAuthUserActions } from '../actionsCreators/user/types';

export function userReducer(_state: IUser, action: TAuthUserActions) {
  switch (action.type) {
    case types.AUTH_USER_ACTION:
      return action.payload;

    case types.LOGOUT_USER_ACTION:
      return initialStore.user;

    default:
      return initialStore.user;
  }
}
