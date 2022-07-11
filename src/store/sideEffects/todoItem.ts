import { Dispatch } from 'react';

import todosApi, { ITodoItemData } from '../../api/Todos';
import {
  addTodoItemAction,
  getTodoItemsAction,
  deleteTodoItemAction,
  editTodoItemTitleAction,
} from '../actionsCreators/todoItem';

export const getTodoItems = (boardId: string) => async (dispatch: Dispatch<any>) => {
  const todoList = await todosApi.fetchTodoItems(boardId);

  dispatch(getTodoItemsAction(todoList));
};

export const addTodoItem = (payload: ITodoItemData, boardId: string) => (
  async (dispatch: any) => {
    const addTodoResponse = await todosApi.addTodoItem(payload, boardId);

    if (!addTodoResponse.hasError) {
      dispatch(addTodoItemAction(addTodoResponse.currentTodoItem));
    }
  }
);

export const editTodoItemTitle = (todoItemData: string, id: string) => (
  async (dispatch: Dispatch<any>) => {
    const editResponse = await todosApi.editTodoItemTitle(todoItemData, id);

    const { editedTodoItem } = editResponse;

    if (!editResponse.hasError) {
      dispatch(editTodoItemTitleAction(editedTodoItem));
    }
  }
);

export const deleteTodoItem = (todoItemId: string) => async (dispatch: any) => {
  const deleteResponse = await todosApi.deleteTodoItem(todoItemId);

  if (!deleteResponse.hasError) {
    dispatch(deleteTodoItemAction(todoItemId));
  }
};
