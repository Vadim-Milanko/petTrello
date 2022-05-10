import { IBoardResponse, IDeleteResponse, IEditResponse } from '../../../api/Board';
import { BoardActionTypes as types } from '../../actionTypes/board';
import { IBoard } from '../../initialStore';

export const fetchBoardsSuccess = (payload: IBoard[]) => ({
  type: types.FETCH_BOARDS_SUCCESS,
  payload,
});

export const addBoardSuccess = (payload: IBoardResponse, boards: IBoard[]) => {
  const { currentBoard, hasError } = payload;

  if (!hasError) {
    return {
      type: types.ADD_BOARD_SUCCESS,
      payload: currentBoard,
    };
  }

  return {
    type: types.ADD_BOARD_ERROR,
    payload: boards,
  };
};

export const deleteBoardSuccess = (
  payload: IDeleteResponse,
  remainingBoards: IBoard[],
  boards: IBoard[],
) => {
  const { hasError } = payload;

  if (!hasError) {
    return {
      type: types.DELETE_BOARD_SUCCESS,
      payload: remainingBoards,
    };
  }

  return {
    type: types.DELETE_BOARD_ERROR,
    payload: boards,
  };
};

export const editBoardTitleSuccess = async (
  payload: IEditResponse,
  preparedBoards: IBoard[],
  boards: IBoard[],
) => {
  const { hasError } = payload;

  if (!hasError) {
    return {
      type: types.EDIT_BOARD_SUCCESS,
      payload: preparedBoards,
    };
  }

  return {
    type: types.EDIT_BOARD_ERROR,
    payload: boards,
  };
};
