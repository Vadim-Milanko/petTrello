import { UserActionTypes as types } from '../../actionTypes/user';
import { IUser } from '../../initialStore';

export interface IAuthUserAction {
  type: types.AUTH_USER_ACTION;
  payload: IUser;
}

export interface ILogoutUserAction {
  type: types.LOGOUT_USER_ACTION;
}

export type TAuthUserActions =
  | IAuthUserAction
  | ILogoutUserAction;
