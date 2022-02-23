import axios from "axios";

import {BASE_URL} from "./constants";
import {FETCH_URLS} from "../pages/SignUp/constants";

export interface IApi {
    fetchUsers():Promise<any>;
    registerUser(userData: IUser): Promise<any>
}

const request = axios.create({
    baseURL: BASE_URL,
});

class Api implements IApi {

    async fetchUsers() : Promise<any> {
        let response;

        try {
            response = await request.get(FETCH_URLS.users);
        } catch (error) {
            console.log(error)
        }

        return response?.data;
    }

        async registerUser(userData): Promise<any> {
            const result = await request.patch(FETCH_URLS.users, userData)
            console.log(userData);
            console.log(result);

            return result;
    }
}

const api = new Api();

export default api;
