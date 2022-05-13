import { IBoardResponse } from '../../../api/Board';
import { BoardActionTypes as types } from '../../actionTypes/board';
import { IBoard } from '../../initialStore';

export const fetchBoardsSuccess = (payload: IBoard[]) => ({
  type: types.FETCH_BOARDS_SUCCESS,
  payload,
});

export const addBoardSuccess = (payload: IBoardResponse) => ({
  type: types.ADD_BOARD_SUCCESS,
  payload: payload.currentBoard,
});

export const addBoardError = (boards: IBoard[]) => ({
  type: types.ADD_BOARD_ERROR,
  payload: boards,
});

export const deleteBoardSuccess = (remainingBoards: IBoard[]) => ({
  type: types.DELETE_BOARD_SUCCESS,
  payload: remainingBoards,
});

export const deleteBoardError = (boards: IBoard[]) => ({
  type: types.DELETE_BOARD_ERROR,
  payload: boards,
});

export const editBoardTitleSuccess = (preparedBoards: IBoard[]) => ({
  type: types.EDIT_BOARD_SUCCESS,
  payload: preparedBoards,
});

export const editBoardTitleError = (boards: IBoard[]) => ({
  type: types.EDIT_BOARD_ERROR,
  payload: boards,
});
