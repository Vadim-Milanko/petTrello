import { IBoard } from '../initialStore';
import { TodosActionTypes as types } from '../actionTypes/todos';
import { TTodosActions } from '../actionsCreators/todos/types';

export function todosReducer(state: IBoard[], action: TTodosActions) {
  switch (action.type) {
    case types.FETCH_TODO_LIST_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
