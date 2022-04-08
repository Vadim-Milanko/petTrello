import axios from 'axios';

import { BASE_URL, FETCH_URLS } from './constants';
import { IBoard } from '../store/initialStore';
import { IBoardData } from '../pages/Dashboard/components/PopoverWindow/PopoverWindow';

export interface IBoardResponse {
  hasError: boolean;
  currentBoard: IBoardData;
}

export interface IBoardApi {
  fetchBoards(): Promise<IBoard[]>
  addBoard(boardData: IBoardData): Promise<IBoardResponse>;
}

const request = axios.create({
  baseURL: BASE_URL,
});

class BoardApi implements IBoardApi {
  async fetchBoards() : Promise<IBoard[]> {
    let response;

    try {
      response = await request.get(FETCH_URLS.boards);
    } catch (error) {
      console.log(error);
    }

    return response?.data;
  }

  async addBoard(boardData: IBoardData): Promise<IBoardResponse> {
    try {
      await request.post(FETCH_URLS.boards, boardData);

      return {
        hasError: false,
        currentBoard: boardData,
      };
    } catch (error) {
      return {
        hasError: true,
        currentBoard: {
          title: '',
        },
      };
    }
  }
}

const boardApi = new BoardApi();

export default boardApi;
