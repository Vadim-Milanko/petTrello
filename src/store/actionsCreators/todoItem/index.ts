import { ITodoItem } from '../../initialStore';
import { TodoItemActionTypes as types } from '../../actionTypes/todoItem';
import { ITodoTitleData } from '../../../pages/Todos';

export const getTodoItemsAction = (payload: ITodoItem[]) => ({
  type: types.GET_TODO_ITEM_ACTION,
  payload,
});

export const addTodoItemAction = (payload: ITodoTitleData) => ({
  type: types.ADD_TODO_ITEM_ACTION,
  payload,
});

export const deleteTodoItemAction = (todoItem: string) => ({
  type: types.DELETE_TODO_ITEM_ACTION,
  payload: todoItem,
});

export const editTodoItemTitleAction = (editedTodoItem: ITodoItem) => ({
  type: types.EDIT_TODO_ITEM_TITLE_ACTION,
  payload: editedTodoItem,
});
