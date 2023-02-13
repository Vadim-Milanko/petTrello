import { ITodoItem } from '../../initialStore';
import { TodoItemActionTypes as types } from '../../actionTypes/todoItem';

interface IGetTodoItemsAction {
  type: types.GET_TODO_ITEM_ACTION;
  payload: ITodoItem[];
}

interface IAddTodoItemAction {
  type: types.ADD_TODO_ITEM_ACTION;
  payload: ITodoItem;
}

interface IDeleteTodoItemAction {
  type: types.DELETE_TODO_ITEM_ACTION;
  payload: string;
}

interface IEditTodoItemTitleAction {
  type: types.EDIT_TODO_ITEM_TITLE_ACTION;
  payload: ITodoItem;
}

export type TTodoItemActions =
  IGetTodoItemsAction
  | IAddTodoItemAction
  | IDeleteTodoItemAction
  | IEditTodoItemTitleAction;
