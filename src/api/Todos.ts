import { BASE_URL, FETCH_URLS } from './constants';
import { ITodoColumn } from '../store/initialStore';
import { request } from './request';
import { ITodoColumnData } from '../pages/Todos';

export interface ITodoColumnResponse {
  hasError: boolean;
  currentTodoColumn: ITodoColumnData;
}

export interface IDeleteResponse {
  hasError: boolean;
}

export interface ITodosApi {
  fetchTodoColumns(): Promise<ITodoColumn[]>
  addTodoColumn(todoColumnData: ITodoColumnData): Promise<ITodoColumnResponse>
  deleteTodoColumn(id: string): Promise<IDeleteResponse>;
}

class TodosApi implements ITodosApi {
  async fetchTodoColumns() : Promise<ITodoColumn[]> {
    let response;

    try {
      response = await request.get(FETCH_URLS.todos);
    } catch (error) {
      console.log(error);
    }

    return response?.data;
  }

  async addTodoColumn(todoColumnData: ITodoColumnData): Promise<ITodoColumnResponse> {
    try {
      const postedTodoColumn = await request.post(FETCH_URLS.todos, todoColumnData);

      return {
        hasError: false,
        currentTodoColumn: postedTodoColumn.data,
      };
    } catch (error) {
      return {
        hasError: true,
        currentTodoColumn: {
          title: '',
        },
      };
    }
  }

  async deleteTodoColumn(id: string): Promise<IDeleteResponse> {
    try {
      const deleteUrl = `${BASE_URL}/${FETCH_URLS.todos}/${id}`;
      const deleteResponse = await request.delete(deleteUrl);

      if (deleteResponse.status === 200) {
        return {
          hasError: false,
        };
      }

      return {
        hasError: true,
      };
    } catch (error) {
      return {
        hasError: true,
      };
    }
  }
}

const todosApi = new TodosApi();

export default todosApi;
