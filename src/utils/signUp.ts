import { IUserFields } from '../pages/SignUp/SignUp';
import { IUser } from '../store/initialStore';

// eslint-disable-next-line max-len
export const checkOnRegistered = (dbUsers: IUserFields[], newUser: IUserFields | IUser) => dbUsers.find((user) => user.email === newUser.email);

export const getIsUserExist = (dbUsers: IUserFields[], newUser: IUserFields): any => {
  const user = checkOnRegistered(dbUsers, newUser);

  return user?.password === newUser.password;
};

export const getUserByEmail = (dbUsers: IUserFields[], userEmail: string): IUser => {
  const userByEmail = dbUsers.filter((user) => user.email === userEmail);
  const [{ login = '', email = '', id = '' }] = userByEmail;

  return {
    login,
    email,
    id,
  };
};
