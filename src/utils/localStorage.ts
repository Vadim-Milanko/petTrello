import { IUser } from '../context';

export const setUserToLS = (key: string, value: IUser) => {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringifiedValue);
};

export const getUserFromLS = (key: string) =>
  // @ts-ignore
  // eslint-disable-next-line implicit-arrow-linebreak
  JSON.parse(localStorage.getItem(key));

export const clearUserFromLS = () => {
  localStorage.clear();
};
