import { BoardActionTypes as types } from '../../actionTypes/board';
import { IBoard } from '../../initialStore';
import { IBoardData } from '../../../pages/Dashboard/components/PopoverWindow';

export const fetchBoardsAction = (payload: IBoard[]) => ({
  type: types.FETCH_BOARDS_SUCCESS,
  payload,
});

export const addBoardAction = (payload: IBoardData) => ({
  type: types.ADD_BOARD_ACTION,
  payload,
});

export const deleteBoardAction = (boardId: string) => ({
  type: types.DELETE_BOARD_ACTION,
  payload: boardId,
});

export const editBoardTitleAction = (editedBoard: IBoard) => ({
  type: types.EDIT_BOARD_ACTION,
  payload: editedBoard,
});
