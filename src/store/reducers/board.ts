import { IAppStore, IBoard } from '../initialStore';
import { BoardActionTypes as types } from '../actionTypes/board';
import { TBoardActions } from '../actionsCreators/board/types';

export function boardReducer(state: IAppStore, action: TBoardActions) {
  switch (action.type) {
    case types.FETCH_BOARDS_SUCCESS: {
      const updatedState = { ...state };

      updatedState.boards = action.payload;

      return updatedState;
    }
    case types.ADD_BOARD_ACTION: {
      const updatedState = { ...state };

      updatedState.boards.push(action.payload);

      return updatedState;
    }
    case types.DELETE_BOARD_ACTION: {
      const updatedState = { ...state };

      updatedState.boards.filter((board) => board.id !== action.payload);

      return updatedState;
    }
    case types.EDIT_BOARD_ACTION: {
      const updatedState = { ...state };

      updatedState.boards.map((board: IBoard) => {
        if (board.id === action.payload.id) {
          return {
            id: board.id,
            title: action.payload.title,
          };
        }
        return board;
      });

      return updatedState;
    }
    default:
      return state;
  }
}
