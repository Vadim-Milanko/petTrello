import { Dispatch } from 'react';

import {
  addBoardAction,
  deleteBoardAction,
  editBoardTitleAction,
  fetchBoardsAction,
} from '../actionsCreators/board';
import boardApi from '../../api/Board';
import { IBoardData } from '../../pages/Dashboard/components/PopoverWindow';

export const fetchBoards = () => async (dispatch: any) => {
  const boardsList = await boardApi.fetchBoards();

  dispatch(fetchBoardsAction(boardsList));
};

export const addBoard = (payload: IBoardData) => async (dispatch: any) => {
  const addResponse = await boardApi.addBoard(payload);

  if (!addResponse.hasError) {
    dispatch(addBoardAction(addResponse.currentBoard));
  }
};

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
