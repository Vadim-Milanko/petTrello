import { Dispatch } from 'react';

import {
  addTodoColumnAction, deleteTodoColumnAction, editTodoColumnTitleAction,
  getTodoColumnsAction,
} from '../actionsCreators/todoColumn';
import todosApi from '../../api/Todos';
import { ITodoTitleData } from '../../pages/Todos';

export const getTodoColumns = (boardId: string) => async (dispatch: Dispatch<any>) => {
  const todoList = await todosApi.fetchTodoColumns(boardId);

  dispatch(getTodoColumnsAction(todoList));
};

export const addTodoColumn = (payload: ITodoTitleData, boardId: string) => (
  async (dispatch: any) => {
    const addTodoResponse = await todosApi.addTodoColumn(payload, boardId);

    if (!addTodoResponse.hasError) {
      dispatch(addTodoColumnAction(addTodoResponse.currentTodoColumn));
    }
  }
);

export const deleteTodoColumn = (todoColumnId: string) => async (dispatch: any) => {
  const deleteResponse = await todosApi.deleteTodoColumn(todoColumnId);

  if (!deleteResponse.hasError) {
    dispatch(deleteTodoColumnAction(todoColumnId));
  }
};

export const editBoardTitle = (todoColumnData: ITodoTitleData, id: string) => (
  async (dispatch: Dispatch<any>) => {
    const editResponse = await todosApi.editTodoColumnTitle(todoColumnData, id);

    const { editedTodoColumn } = editResponse;

    if (!editResponse.hasError) {
      dispatch(editTodoColumnTitleAction(editedTodoColumn));
    }
  }
);
