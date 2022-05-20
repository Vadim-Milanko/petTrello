import { IBoard } from '../initialStore';
import { BoardActionTypes as types } from '../actionTypes/board';
import { TBoardActions } from '../actionsCreators/board/types';

export function boardReducer(state: IBoard[], action: TBoardActions) {
  switch (action.type) {
    case types.FETCH_BOARDS_SUCCESS:
      return action.payload;

    case types.ADD_BOARD_ACTION:
      return [
        ...state,
        action.payload,
      ];

    case types.DELETE_BOARD_ACTION:
      return state.filter((board) => board.id !== action.payload);

    case types.EDIT_BOARD_ACTION:
      return state.map((board: IBoard) => {
        if (board.id === action.payload.id) {
          return {
            id: board.id,
            title: action.payload.title,
          };
        }
        return board;
      });

    default:
      return state;
  }
}
