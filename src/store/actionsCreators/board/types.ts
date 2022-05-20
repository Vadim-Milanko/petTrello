import { IBoard } from '../../initialStore';
import { BoardActionTypes as types } from '../../actionTypes/board';

interface IFetchBoardsAction {
  type: types.FETCH_BOARDS_SUCCESS;
  payload: IBoard[];
}

interface IAddBoardsAction {
  type: types.ADD_BOARD_ACTION;
  payload: IBoard;
}

interface IDeleteBoardsAction {
  type: types.DELETE_BOARD_ACTION;
  payload: string;
}

interface IEditBoardTitleAction {
  type: types.EDIT_BOARD_ACTION;
  payload: IBoard;
}

export type TBoardActions =
  IFetchBoardsAction
  | IAddBoardsAction
  | IDeleteBoardsAction
  | IEditBoardTitleAction;
