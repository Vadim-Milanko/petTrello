import { IBoard } from '../store/initialStore';

export const deleteBoardById = (boardsFromDB: IBoard[], id: string) => {
  const boards = boardsFromDB.filter((board) => board.id !== id);

  return boards;
};
