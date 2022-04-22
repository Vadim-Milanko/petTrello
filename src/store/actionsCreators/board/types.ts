import { IBoard } from '../../initialStore';
import { BoardActionTypes as types } from '../../actionTypes/board';
import { IBoardData } from '../../../pages/Dashboard/components/PopoverWindow';

interface IFetchBoardsSuccess {
  type: types.FETCH_BOARDS_SUCCESS;
  payload: IBoard[];
}
interface IAddBoardsSuccess {
  type: types.ADD_BOARD_SUCCESS;
  payload: IBoardData;
}
interface IDeleteBoardsSuccess {
  type: types.DELETE_BOARD_SUCCESS;
  payload: IBoard[];
}
interface IEditBoardsSuccess {
  type: types.EDIT_BOARD_SUCCESS;
  payload: IBoard[];
}

export type TBoardActions =
  IFetchBoardsSuccess
  | IAddBoardsSuccess
  | IDeleteBoardsSuccess
  | IEditBoardsSuccess;
