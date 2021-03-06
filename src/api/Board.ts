import { BASE_URL, FETCH_URLS } from './constants';
import { IBoard } from '../store/initialStore';
import { IBoardData } from '../pages/Dashboard/components/PopoverWindow';
import { request } from './request';

export interface IBoardResponse {
  hasError: boolean;
  currentBoard: IBoard;
}

export interface IDeleteResponse {
  hasError: boolean;
}

export interface IEditResponse {
  hasError: boolean;
  editedBoard: IBoard;
}

export interface IBoardApi {
  fetchBoards(userId: string): Promise<IBoard[]>
  addBoard(boardData: IBoardData, userId: string): Promise<IBoardResponse>;
  deleteBoard(id: string): Promise<IDeleteResponse>;
  editBoardTitle(boardData: IBoardData, id: string): Promise<IEditResponse>;
}

class BoardApi implements IBoardApi {
  async fetchBoards(userId: string) : Promise<IBoard[]> {
    let response;

    try {
      response = await request.get(`${FETCH_URLS.users}/${userId}/${FETCH_URLS.boards}`);
    } catch (error) {
      console.log(error);
    }

    return response?.data;
  }

  async addBoard(boardData: IBoardData, userId: string): Promise<IBoardResponse> {
    try {
      const url = `${FETCH_URLS.users}/${userId}/${FETCH_URLS.boards}`;
      const postedBoard = await request.post(url, boardData);

      return {
        hasError: false,
        currentBoard: postedBoard.data,
      };
    } catch (error) {
      return {
        hasError: true,
        currentBoard: {
          id: '',
          title: '',
        },
      };
    }
  }

  async deleteBoard(id: string): Promise<IDeleteResponse> {
    try {
      const deleteUrl = `${BASE_URL}/${FETCH_URLS.boards}/${id}`;
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

  async editBoardTitle(boardData: IBoardData, id: string): Promise<IEditResponse> {
    try {
      const patchUrl = `${BASE_URL}/${FETCH_URLS.boards}/${id}`;
      const editResponse = await request.patch(patchUrl, boardData);

      if (editResponse.status === 200) {
        return {
          hasError: false,
          editedBoard: editResponse.data,
        };
      }

      return {
        hasError: true,
        editedBoard: {} as IBoard,
      };
    } catch (error) {
      console.log(error);

      return {
        hasError: true,
        editedBoard: {} as IBoard,
      };
    }
  }
}

const boardApi = new BoardApi();

export default boardApi;
