import { VALIDATION_MESSAGES, FETCH_URLS } from './constants';
import { getIsUserExist, getUserByEmail, checkOnRegistered } from '../utils/signUp';
import { IUserFields } from '../pages/SignUp';
import { ILoginUserData } from '../pages/LogIn';
import { IUser } from '../store/initialStore';
import { request } from './request';

export interface IServerResponse {
  hasError: boolean | null;
  message: string;
  currentUser: IUser;
}

export interface IAuthApi {
  fetchUsers():Promise<IUserFields[]>;
  loginUser(userData: ILoginUserData): Promise<IServerResponse>;
  registerUser(userData: IUserFields): Promise<IServerResponse>;
}

class AuthApi implements IAuthApi {
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
          id: '',
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
          id: '',
        },
      };
    }
  }

  async registerUser(userData: IUserFields): Promise<IServerResponse> {
    try {
      const usersFromDb = await this.fetchUsers();
      const user = checkOnRegistered(usersFromDb, userData);

      const { login = '', email, id } = userData;

      if (user) {
        return {
          hasError: true,
          message: VALIDATION_MESSAGES.USER_ALREADY_EXISTS,
          currentUser: {
            login: '',
            email: '',
            id: '',
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
          id,
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
          id: '',
        },
      };
    }
  }
}

const authApi = new AuthApi();

export default authApi;
