import { UserActionTypes as types } from '../../actionTypes/user';
import { ILogoutUserAction } from './types';
import { IUser } from '../../initialStore';

export const authUserAction = (payload: IUser) => ({
  type: types.AUTH_USER_ACTION,
  payload,
});

export const logoutUserAction = (homeNavigate: () => void): ILogoutUserAction => {
  homeNavigate();

  return {
    type: types.LOGOUT_USER_ACTION,
  };
};
