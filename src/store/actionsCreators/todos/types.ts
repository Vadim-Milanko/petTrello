import { TodosActionTypes as types } from '../../actionTypes/todos';
import { ITodoColumn } from '../../initialStore';

interface IGetTodoColumnsAction {
  type: types.GET_TODO_COLUMNS_ACTION;
  payload: ITodoColumn[];
}

interface IAddTodoColumnAction {
  type: types.ADD_TODO_COLUMN_ACTION;
  payload: ITodoColumn;
}

interface IDeleteTodoColumnAction {
  type: types.DELETE_TODO_COLUMN_ACTION;
  payload: string;
}

interface IEditTodoColumnTitleAction {
  type: types.EDIT_TODO_COLUMN_TITLE_ACTION;
  payload: ITodoColumn;
}

export type TTodosActions =
  IGetTodoColumnsAction
  | IAddTodoColumnAction
  | IDeleteTodoColumnAction
  | IEditTodoColumnTitleAction;
