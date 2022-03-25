import axios from 'axios';

import { BASE_URL, VALIDATION_MESSAGES } from './constants';
import { FETCH_URLS } from '../pages/SignUp/constants';
import { getIsUserExist, getUserByEmail, checkOnRegistered } from '../utils/signUp';
import { IUserFields } from '../pages/SignUp/SignUp';
import { IUser } from '../context';
import { ILoginUserData } from '../pages/LogIn/LogIn';

export interface IServerResponse {
  hasError: boolean | null;
  message: string;
  currentUser: IUser;
}

export interface IUsersApi {
    fetchUsers():Promise<IUserFields[]>;
    loginUser(userData: ILoginUserData): Promise<IServerResponse>;
    registerUser(userData: IUserFields): Promise<IServerResponse>;
}

const request = axios.create({
  baseURL: BASE_URL,
});

class UsersApi implements IUsersApi {
  async fetchUsers() : Promise<IUserFields[]> {
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
        const user = getUserByEmail(usersFromDb, userData.email);

        return {
          hasError: false,
          message: VALIDATION_MESSAGES.SUCCESS_LOGIN_USER,
          currentUser: user,
        };
      }
      return {
        hasError: true,
        message: VALIDATION_MESSAGES.FAILED_LOGIN_USER,
        currentUser: {
          login: '',
          email: '',
        },
      };
    } catch (error) {
      console.log(error);
      return {
        hasError: true,
        message: VALIDATION_MESSAGES.FAILED_MASSAGE,
        currentUser: {
          login: '',
          email: '',
        },
      };
    }
  }

  async registerUser(userData: IUserFields): Promise<IServerResponse> {
    try {
      const usersFromDb = await this.fetchUsers();
      const user = checkOnRegistered(usersFromDb, userData);
      const { login = '', email } = userData;

      if (user) {
        return {
          hasError: true,
          message: VALIDATION_MESSAGES.USER_ALREADY_EXISTS,
          currentUser: {
            login: '',
            email: '',
          },
        };
      }
      await request.post(FETCH_URLS.users, userData);

      return {
        hasError: false,
        message: VALIDATION_MESSAGES.SUCCESS_CREATE_USER,
        currentUser: {
          login,
          email,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        hasError: true,
        message: VALIDATION_MESSAGES.FAILED_MASSAGE,
        currentUser: {
          login: '',
          email: '',
        },
      };
    }
  }
}

const api = new UsersApi();

export default api;
