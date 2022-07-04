import { BASE_URL, FETCH_URLS } from './constants';
import { ITodoColumn, ITodoItem } from '../store/initialStore';
import { request } from './request';
import { ITodoTitleData } from '../pages/Todos';

export interface ITodoColumnResponse {
  hasError: boolean;
  currentTodoColumn: ITodoTitleData;
}

export interface ITodoItemResponse {
  hasError: boolean;
  currentTodoItem: ITodoTitleData;
}

export interface IDeleteResponse {
  hasError: boolean;
}

export interface IEditResponse {
  hasError: boolean;
  editedTodoColumn: ITodoColumn;
}

export interface ITodosApi {
  fetchTodoColumns(boardId: string): Promise<ITodoColumn[]>
  addTodoColumn(todoColumnData: ITodoTitleData, todoId: string): Promise<ITodoColumnResponse>;
  deleteTodoColumn(id: string): Promise<IDeleteResponse>;
  editTodoColumnTitle(todoColumnData: ITodoTitleData, id: string): Promise<IEditResponse>;
  fetchTodoItems(boardId: string): Promise<ITodoItem[]>;
  addTodoItem(todoItemData: ITodoTitleData, boardId: string): Promise<ITodoItemResponse>;
  deleteTodoItem(id: string): Promise<IDeleteResponse>;
}

class TodosApi implements ITodosApi {
  async fetchTodoColumns(boardId: string) : Promise<ITodoColumn[]> {
    let response;

    try {
      response = await request.get(`${FETCH_URLS.boards}/${boardId}/${FETCH_URLS.todoColumns}`);
    } catch (error) {
      console.log(error);
    }

    return response?.data;
  }

  async addTodoColumn(
    todoColumnData: ITodoTitleData,
    boardId: string,
  ): Promise<ITodoColumnResponse> {
    try {
      const url = `${FETCH_URLS.boards}/${boardId}/${FETCH_URLS.todoColumns}`;

      const postedTodoColumn = await request.post(url, todoColumnData);

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
      const deleteUrl = `${BASE_URL}/${FETCH_URLS.todoColumns}/${id}`;
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

  async editTodoColumnTitle(todoColumnData: ITodoTitleData, id: string): Promise<IEditResponse> {
    try {
      const patchUrl = `${BASE_URL}/${id}/${FETCH_URLS.todoColumns}`;
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

  async fetchTodoItems(boardId: string) : Promise<ITodoItem[]> {
    let response;

    try {
      response = await request.get(`${FETCH_URLS.boards}/${boardId}/${FETCH_URLS.todoItems}`);
    } catch (error) {
      console.log(error);
    }

    return response?.data;
  }

  async addTodoItem(todoItemData: ITodoTitleData, boardId: string): Promise<ITodoItemResponse> {
    try {
      const url = `${FETCH_URLS.boards}/${boardId}/${FETCH_URLS.todoItems}`;

      const postedTodoItem = await request.post(url, todoItemData);

      return {
        hasError: false,
        currentTodoItem: postedTodoItem.data,
      };
    } catch (error) {
      return {
        hasError: true,
        currentTodoItem: {
          title: '',
        },
      };
    }
  }

  async deleteTodoItem(id: string): Promise<IDeleteResponse> {
    try {
      const deleteUrl = `${BASE_URL}/${FETCH_URLS.todoItems}/${id}`;
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
