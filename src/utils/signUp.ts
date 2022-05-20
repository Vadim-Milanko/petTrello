import { IUserFields } from '../pages/SignUp';
import { IUser } from '../store/initialStore';

export const checkOnRegistered = (dbUsers: IUserFields[], newUser: IUserFields | IUser) => {
  const { email } = newUser;

  return dbUsers.find((user) => user.email === email);
};

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
