import { TodosActionTypes as types } from '../../actionTypes/todos';
import { ITodoColumn } from '../../initialStore';
import { ITodoColumnData } from '../../../pages/Todos';

export const getTodoColumnsAction = (payload: ITodoColumn[]) => ({
  type: types.GET_TODO_COLUMNS_ACTION,
  payload,
});

export const addTodoColumnAction = (payload: ITodoColumnData) => ({
  type: types.ADD_TODO_COLUMN_ACTION,
  payload,
});

export const deleteTodoColumnAction = (todoColumn: string) => ({
  type: types.DELETE_TODO_COLUMN_ACTION,
  payload: todoColumn,
});

export const editTodoColumnTitleAction = (editedTodoColumn: ITodoColumn) => ({
  type: types.EDIT_TODO_COLUMN_TITLE_ACTION,
  payload: editedTodoColumn,
});
