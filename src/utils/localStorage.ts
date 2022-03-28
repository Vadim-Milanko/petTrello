import { IUser } from '../context';

export const setUserToLS = (key: string, value: IUser) => {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringifiedValue);
};

export const getUserFromLS = () =>
  // @ts-ignore
  // eslint-disable-next-line implicit-arrow-linebreak
  JSON.parse(localStorage.getItem('user'));

export const clearUserFromLS = () => {
  localStorage.clear();
};
