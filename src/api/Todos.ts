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

export interface IEditResponse {
  hasError: boolean;
  editedTodoColumn: ITodoColumn;
}

export interface ITodosApi {
  fetchTodoColumns(): Promise<ITodoColumn[]>
  addTodoColumn(todoColumnData: ITodoColumnData): Promise<ITodoColumnResponse>
  deleteTodoColumn(id: string): Promise<IDeleteResponse>;
  editTodoColumnTitle(todoColumnData: ITodoColumnData, id: string): Promise<IEditResponse>;
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

  async editTodoColumnTitle(todoColumnData: ITodoColumnData, id: string): Promise<IEditResponse> {
    try {
      const patchUrl = `${BASE_URL}/${FETCH_URLS.todos}/${id}`;
      const editResponse = await request.patch(patchUrl, todoColumnData);

      if (editResponse.status === 200) {
        return {
          hasError: false,
          editedTodoColumn: editResponse.data,
        };
      }

      return {
        hasError: true,
        editedTodoColumn: {} as ITodoColumn,
      };
    } catch (error) {
      console.log(error);

      return {
        hasError: true,
        editedTodoColumn: {} as ITodoColumn,
      };
    }
  }
}

const todosApi = new TodosApi();

export default todosApi;
