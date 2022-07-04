import { Dispatch } from 'react';

import {
  addBoardAction,
  deleteBoardAction,
  editBoardTitleAction,
  getBoardsAction,
} from '../actionsCreators/board';
import boardApi from '../../api/Board';
import { IBoardData } from '../../pages/Dashboard/components/PopoverWindow';

export const fetchBoards = (userId: string) => async (dispatch: any) => {
  const boardsList = await boardApi.fetchBoards(userId);

  dispatch(getBoardsAction(boardsList));
};

export const addBoard = (payload: IBoardData, todoNav: (id: string) => void, userId: string) => (
  async (dispatch: any) => {
    const addResponse = await boardApi.addBoard(payload, userId);

    if (!addResponse.hasError) {
      dispatch(addBoardAction(addResponse.currentBoard));
      todoNav(addResponse.currentBoard.id);
    }
  }
);

export const deleteBoard = (boardId: string) => async (dispatch: any) => {
  const deleteResponse = await boardApi.deleteBoard(boardId);

  if (!deleteResponse.hasError) {
    dispatch(deleteBoardAction(boardId));
  }
};

export const editBoardTitle = (boardData: IBoardData, id: string) => (
  async (dispatch: Dispatch<any>) => {
    const editResponse = await boardApi.editBoardTitle(boardData, id);

    const { editedBoard } = editResponse;

    if (!editResponse.hasError) {
      dispatch(editBoardTitleAction(editedBoard));
    }
  }
);
