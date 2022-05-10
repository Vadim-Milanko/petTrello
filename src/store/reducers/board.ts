import { IAppStore } from '../initialStore';
import { BoardActionTypes as types } from '../actionTypes/board';
import { TBoardActions } from '../actionsCreators/board/types';

export function boardReducer(state: IAppStore, action: TBoardActions) {
  switch (action.type) {
    case types.FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        boards: action.payload,
      };
    case types.ADD_BOARD_SUCCESS:
      return {
        ...state,
        boards: [
          ...state.boards,
          action.payload,
        ],
      };
    case types.ADD_BOARD_ERROR:
      return {
        ...state,
        boards: action.payload,
      };
    case types.DELETE_BOARD_SUCCESS: {
      return {
        ...state,
        boards: action.payload,
      };
    }
    case types.DELETE_BOARD_ERROR: {
      return {
        ...state,
        boards: action.payload,
      };
    }
    case types.EDIT_BOARD_SUCCESS:
      return {
        ...state,
        boards: action.payload,
      };
    case types.EDIT_BOARD_ERROR:
      return {
        ...state,
        boards: action.payload,
      };
    default:
      return state;
  }
}
