import { TodosActionTypes as types } from '../../actionTypes/todos';
import { ITodo } from '../../initialStore';

interface IFetchTodoListAction {
  type: types.FETCH_TODO_LIST_SUCCESS;
  payload: ITodo[];
}

export type TTodosActions =
  IFetchTodoListAction;
