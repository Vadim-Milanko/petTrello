import axios from 'axios';

import { BASE_URL, VALIDATION_MESSAGES } from './constants';
import { FETCH_URLS } from '../pages/SignUp/constants';
import { checkOnRegistered, getIsUserExist } from '../utils/signUp';
import { IUser } from '../pages/SignUp/SignUp';
import { ILoginUserData } from '../pages/LogIn/LogIn';

export interface IServerResponse {
  hasError: boolean;
  message: string;
}

export interface IUsersApi {
    fetchUsers():Promise<IUser[]>;
    loginUser(userData: ILoginUserData): Promise<IServerResponse>;
    registerUser(userData: IUser): Promise<IServerResponse>;
}

const request = axios.create({
  baseURL: BASE_URL,
});

class UsersApi implements IUsersApi {
  async fetchUsers() : Promise<IUser[]> {
    let response;

    try {
      response = await request.get(FETCH_URLS.users);
    } catch (error) {
      console.log(error);
    }

    return response?.data;
  }

  async loginUser(userData: ILoginUserData): Promise<IServerResponse> {
    try {
      const usersFromDb = await this.fetchUsers();
      const isSuccessLogin = getIsUserExist(usersFromDb, userData);
      if (isSuccessLogin) {
        return {
          hasError: false,
          message: VALIDATION_MESSAGES.SUCCESS_LOGIN_USER,
        };
      }
      return {
        hasError: true,
        message: VALIDATION_MESSAGES.FAILED_LOGIN_USER,
      };
    } catch (error) {
      console.log(error);
      return {
        hasError: true,
        message: VALIDATION_MESSAGES.FAILED_MASSAGE,
      };
    }
  }

  async registerUser(userData: IUser): Promise<IServerResponse> {
    try {
      const usersFromDb = await this.fetchUsers();
      const user = checkOnRegistered(usersFromDb, userData);

      if (user) {
        return {
          hasError: true,
          message: VALIDATION_MESSAGES.USER_ALREADY_EXISTS,
        };
      }
      await request.post(FETCH_URLS.users, userData);

      return {
        hasError: false,
        message: VALIDATION_MESSAGES.SUCCESS_CREATE_USER,
      };
    } catch (error) {
      console.log(error);
      return {
        hasError: true,
        message: VALIDATION_MESSAGES.FAILED_MASSAGE,
      };
    }
  }
}

const api = new UsersApi();

export default api;
