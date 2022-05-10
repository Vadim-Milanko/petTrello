import { IBoard } from '../../initialStore';
import { BoardActionTypes as types } from '../../actionTypes/board';

interface IFetchBoardsSuccess {
  type: types.FETCH_BOARDS_SUCCESS;
  payload: IBoard[];
}

interface IAddBoardsSuccess {
  type: types.ADD_BOARD_SUCCESS;
  payload: IBoard;
}

interface IAddBoardsError {
  type: types.ADD_BOARD_ERROR;
  payload: IBoard[];
}

interface IDeleteBoardsSuccess {
  type: types.DELETE_BOARD_SUCCESS;
  payload: IBoard[];
}

interface IDeleteBoardsError {
  type: types.DELETE_BOARD_ERROR;
  payload: IBoard[];
}

interface IEditBoardTitleSuccess {
  type: types.EDIT_BOARD_SUCCESS;
  payload: IBoard[];
}

interface IEditBoardsError {
  type: types.EDIT_BOARD_ERROR;
  payload: IBoard[];
}

export type TBoardActions =
  IFetchBoardsSuccess
  | IAddBoardsSuccess
  | IAddBoardsError
  | IDeleteBoardsSuccess
  | IDeleteBoardsError
  | IEditBoardTitleSuccess
  | IEditBoardsError;
