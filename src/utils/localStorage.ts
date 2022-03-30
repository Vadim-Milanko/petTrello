import { IUser } from '../store/initialStore';

export const setUserToLS = (key: string, value: IUser) => {
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringifiedValue);
};

// @ts-ignore
export const getUserFromLS = () => JSON.parse(localStorage.getItem('user'));

export const clearUserFromLS = () => {
  localStorage.clear();
};
