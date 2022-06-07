import { Dispatch } from 'react';

import {
  addTodoColumnAction, deleteTodoColumnAction, editTodoColumnTitleAction,
  getTodoColumnsAction,
} from '../actionsCreators/todos';
import todosApi from '../../api/Todos';
import { ITodoColumnData } from '../../pages/Todos';

export const getTodoColumns = () => async (dispatch: Dispatch<any>) => {
  const todoList = await todosApi.fetchTodoColumns();

  dispatch(getTodoColumnsAction(todoList));
};

export const addTodoColumn = (payload: ITodoColumnData) => (
  async (dispatch: any) => {
    const addTodoResponse = await todosApi.addTodoColumn(payload);

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

export const editBoardTitle = (todoColumnData: ITodoColumnData, id: string) => (
  async (dispatch: Dispatch<any>) => {
    const editResponse = await todosApi.editTodoColumnTitle(todoColumnData, id);

    const { editedTodoColumn } = editResponse;

    if (!editResponse.hasError) {
      dispatch(editTodoColumnTitleAction(editedTodoColumn));
    }
  }
);
