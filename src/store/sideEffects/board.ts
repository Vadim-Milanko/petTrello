import { Dispatch } from 'react';

import {
  addBoardError,
  addBoardSuccess, deleteBoardError,
  deleteBoardSuccess, editBoardTitleError,
  editBoardTitleSuccess,
  fetchBoardsSuccess,
} from '../actionsCreators/board';
import boardApi from '../../api/Board';
import { IBoardData } from '../../pages/Dashboard/components/PopoverWindow';
import { IBoard } from '../initialStore';
import { deleteBoardById } from '../../utils/boards';

export const fetchBoards = () => async (dispatch: any) => {
  const boardsList = await boardApi.fetchBoards();

  dispatch(fetchBoardsSuccess(boardsList));
};

export const addBoard = (payload: IBoardData, boards: IBoard[]) => async (dispatch: any) => {
  const addResponse = await boardApi.addBoard(payload);

  if (!addResponse.hasError) {
    dispatch(addBoardSuccess(addResponse));
  } else {
    dispatch(addBoardError(boards));
  }
};

export const deleteBoard = (boardId: string, boards: IBoard[]) => async (dispatch: any) => {
  const deleteResponse = await boardApi.deleteBoard(boardId);

  const preparedBoards = deleteBoardById(boards, boardId);

  if (!deleteResponse.hasError) {
    dispatch(deleteBoardSuccess(preparedBoards));
  } else {
    dispatch(deleteBoardError(boards));
  }
};

export const editBoardTitle = (
  boardData: IBoardData,
  id: string,
  boards: IBoard[],
) => async (dispatch: Dispatch<any>) => {
  const editResponse = await boardApi.editBoardTitle(boardData, id);

  const { editedBoard } = editResponse;

  const preparedBoards = boards.map((board: IBoard) => {
    if (board.id === editedBoard.id) {
      return {
        id: board.id,
        title: editedBoard.title,
      };
    }
    return board;
  });

  if (!editResponse.hasError) {
    dispatch(editBoardTitleSuccess(preparedBoards));
  } else {
    dispatch(editBoardTitleError(boards));
  }
};
