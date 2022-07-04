import { Dispatch } from 'react';
import todosApi from '../../api/Todos';
import { addTodoItemAction, getTodoItemsAction, deleteTodoItemAction } from '../actionsCreators/todoItem';
import { ITodoTitleData } from '../../pages/Todos';

export const getTodoItems = (boardId: string) => async (dispatch: Dispatch<any>) => {
  const todoList = await todosApi.fetchTodoItems(boardId);

  dispatch(getTodoItemsAction(todoList));
};

export const addTodoItem = (payload: ITodoTitleData, boardId: string) => (
  async (dispatch: any) => {
    const addTodoResponse = await todosApi.addTodoItem(payload, boardId);

    if (!addTodoResponse.hasError) {
      dispatch(addTodoItemAction(addTodoResponse.currentTodoItem));
    }
  }
);

export const deleteTodoItem = (todoItemId: string) => async (dispatch: any) => {
  const deleteResponse = await todosApi.deleteTodoItem(todoItemId);

  if (!deleteResponse.hasError) {
    dispatch(deleteTodoItemAction(todoItemId));
  }
};
