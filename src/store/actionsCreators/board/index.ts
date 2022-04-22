import boardApi from '../../../api/Board';
import { BoardActionTypes as types } from '../../actionTypes/board';
import { IBoardData } from '../../../pages/Dashboard/components/PopoverWindow';
import { IBoard } from '../../initialStore';

export const fetchBoardsSuccess = async () => {
  const response = await boardApi.fetchBoards();

  return {
    type: types.FETCH_BOARDS_SUCCESS,
    payload: response,
  };
};

export const addBoardSuccess = async (payload: IBoardData) => {
  const response = await boardApi.addBoard(payload);
  const { currentBoard } = response;

  return {
    type: types.ADD_BOARD_SUCCESS,
    payload: currentBoard,
  };
};

export const deleteBoardSuccess = async (payload: IBoard[]) => ({
  type: types.DELETE_BOARD_SUCCESS,
  payload,
});

export const editBoardTitleSuccess = async (boardData: IBoardData, id: string) => {
  const response = await boardApi.editBoardTitle(boardData, id);
  const boards = await boardApi.fetchBoards();
  const { editedBoard } = response;

  const preparedBoards = boards.map((board: IBoard) => {
    if (board.id === editedBoard.id) {
      return {
        id: board.id,
        title: editedBoard.title,
      };
    }
    return board;
  });

  return {
    type: types.EDIT_BOARD_SUCCESS,
    payload: preparedBoards,
  };
};
