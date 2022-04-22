import { IAppStore } from '../initialStore';
import { BoardActionTypes as types } from '../actionTypes/board';
import { TBoardActions } from '../actionsCreators/board/types';

export function boardReducer(state: IAppStore, action: TBoardActions) {
  const { payload } = action;

  switch (action.type) {
    case types.FETCH_BOARDS_SUCCESS:
      return {
        boards: payload,
      };
    case types.ADD_BOARD_SUCCESS:
      return {
        boards: [
          ...state.boards,
          payload,
        ],
      };
    case types.DELETE_BOARD_SUCCESS:
      return {
        boards: payload,
      };
    case types.EDIT_BOARD_SUCCESS:
      return {
        boards: payload,
      };

    default:
      return state;
  }
}
