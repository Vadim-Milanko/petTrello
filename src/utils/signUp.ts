import { IUser } from '../pages/SignUp/SignUp';
import { ILoginUserData } from '../pages/LogIn/LogIn';

// eslint-disable-next-line max-len
export const checkOnRegistered = (currentUsers: IUser[], newUser: IUser | ILoginUserData): IUser | ILoginUserData | undefined => currentUsers.find((user) => user.email === newUser.email);

export const getIsUserExist = (currentUsers: IUser[], newUser: IUser | ILoginUserData): any => {
  const user = checkOnRegistered(currentUsers, newUser);

  return user?.password === newUser.password;
};
