import axios from 'axios';

import { BASE_URL, VALIDATION_MESSAGES } from './constants';
import { FETCH_URLS } from '../pages/SignUp/constants';
import { chekOnRegistred } from '../utils/signUp';
import { IUser } from '../pages/SignUp/SignUp';

export interface IServerResponse {
  hasError: boolean;
  message: string;
}

export interface IUsersApi {
    fetchUsers():Promise<IUser[]>;
    registerUser(userData: IUser): Promise<IServerResponse>
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

  async registerUser(userData: IUser): Promise<IServerResponse> {
    try {
      const usersFromDb = await this.fetchUsers();
      const isAlreadyRegistered = chekOnRegistred(usersFromDb, userData);

      if (isAlreadyRegistered) {
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
        message: VALIDATION_MESSAGES.FAILED_CREATE_USER,
      };
    }
  }
}

const api = new UsersApi();

export default api;
