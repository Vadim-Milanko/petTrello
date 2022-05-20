import axios from 'axios';

import { BASE_URL, FETCH_URLS } from './constants';
import { ITodo } from '../store/initialStore';

export interface ITodosApi {
  fetchTodoList(): Promise<ITodo[]>
}

const request = axios.create({
  baseURL: BASE_URL,
});

class TodosApi implements ITodosApi {
  async fetchTodoList() : Promise<ITodo[]> {
    let response;

    try {
      response = await request.get(FETCH_URLS.todos);
    } catch (error) {
      console.log(error);
    }

    return response?.data;
  }
}

const todosApi = new TodosApi();

export default todosApi;
